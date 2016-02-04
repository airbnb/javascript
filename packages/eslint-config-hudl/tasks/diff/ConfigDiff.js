const path = require('path');
const request = require('request-promise');
const fs = require('fs-extra');
const _ = require('lodash');
const tmp = require('tmp');
const Config = require('eslint/lib/config');
const diff = require('deep-diff').diff;
const Handlebars = require('handlebars');
const diffTemplatePath = require.resolve('./diff-template.md');
const diffSectionPartialPath = require.resolve('./diff-section-partial.md');

function ConfigDiff() {
}

function normalizeRules(config) {
  _.each(config.rules, function(val, key, rules) {
    if (_.isNumber(val)) {
      rules[key] = [val]; // eslint-disable-line no-param-reassign
    }
  });
  return config;
}

function detailedDiff(ourConfig, theirConfig, options) {
  const differences = diff(ourConfig.rules, theirConfig.rules);
  const ruleDifferences = differences.map(function(change) {
    var valueArrays;
    var changeType;
    var isKnown;

    function diffValueChanges(thisSet, otherSet, flag) {
      return thisSet.map(function(value, i) {
        const valueInfo = {
          rawValue: value,
        };
        if (!_.isEqual(value, otherSet[i])) {
          valueInfo[flag] = true;
        }
        return valueInfo;
      });
    }

    if (change.kind === 'N' && change.path.length === 1) {
      changeType = 'added';
      isKnown = options.added && _.isEqual(options.added[change.path[0]], change.rhs);
      valueArrays = [
        change.rhs.map(function(value) {
          return {
            rawValue: value,
            added: true,
          };
        }),
      ];
    } else if (change.kind === 'D' && change.path.length === 1) {
      changeType = 'removed';
      isKnown = options.removed && _.contains(options.removed, change.path[0]);
      valueArrays = [
        change.lhs.map(function(value) {
          return {
            rawValue: value,
            removed: true,
          };
        }),
      ];
    } else {
      const prevValue = ourConfig.rules[change.path[0]];
      const newValue = theirConfig.rules[change.path[0]];

      changeType = 'edited';
      isKnown = options.edited && _.isEqual(options.edited[change.path[0]], newValue);

      valueArrays = [
        diffValueChanges(prevValue, newValue, 'removed'),
        diffValueChanges(newValue, prevValue, 'added'),
      ];
    }

    // Shape objects for formatting
    valueArrays.forEach(function(valueArray) {
      valueArray.forEach(function(valueInfo, i) {
        // JSON-format values
        valueInfo.value = JSON.stringify(valueInfo.rawValue);

        // Add `last` flags for formatting purposes
        if (i === valueArray.length - 1) {
          valueInfo.last = true;
        }
      });
    });

    function getUrl(name) {
      if (/\//.test(name)) {
        return null;
      }
      return 'http://eslint.org/docs/rules/' + name + '.html';
    }

    return {
      name: change.path[0],
      url: getUrl(change.path[0]),
      changeType: changeType,
      isKnown: isKnown,
      valueArrays: valueArrays,
    };
  });

  function organizeRules(rules) {
    const groupedRules = _(rules)
      .sortBy('name')
      .groupBy('changeType').value();

    const groupsList = _.map({
      'Added rules': groupedRules.added || [],
      'Removed rules': groupedRules.removed || [],
      'Edited rules': groupedRules.edited || [],
    }, function(val, key) {
      return {
        groupName: key,
        rules: val,
      };
    });

    return {
      ruleGroups: groupsList,
    };
  }

  function partitionRules(rules) {
    const partitioned = _.partition(rules, 'isKnown');
    return {
      known: organizeRules(partitioned[0]),
      unknown: organizeRules(partitioned[1]),
    };
  }

  const templateData = partitionRules(ruleDifferences);

  Handlebars.registerPartial('diffSection', fs.readFileSync(diffSectionPartialPath, 'utf8'));

  return Handlebars.compile(fs.readFileSync(diffTemplatePath, 'utf8'))(templateData);
}

function generateDiff(ours, theirs, options) {
  // if (options) {
  //   // hash
  //   _.each(options.overwrite, function(val, key) {
  //     deep.set(theirs.config, key, val);
  //   });
  //   // array
  //   _.each(options.ignore, function(val) {
  //     deep.remove(theirs.config, val);
  //   });
  // }

  [ours.config, theirs.config].forEach(normalizeRules);
  return detailedDiff(ours.config, theirs.config, options);
}

ConfigDiff.prototype.compare = function(configPath1, configPath2, options) {
  const configPaths = [configPath1, configPath2];
  return this._loadConfigs(configPaths)
    .then(function(configs) {
      return generateDiff({
        path: configPath1,
        config: configs[0],
      }, {
        path: configPath2,
        config: configs[1],
      }, options);
    });
};

ConfigDiff.prototype._loadConfigs = function(configPaths) {
  return Promise.all(configPaths.map(function(configPath) {
    return this._resolveFilePath(configPath)
      .then(function(filePath) {
        return this._loadConfig(filePath);
      }.bind(this));
  }.bind(this)));
};

ConfigDiff.prototype._resolveFilePath = function(configPath) {
  if (/^https?:/.test(configPath)) {
    return request(configPath)
      .then(function(contents) {
        const tmpDir = tmp.dirSync({
          unsafeCleanup: true,
        });
        const filePath = path.resolve(tmpDir.name, path.basename(configPath) || '.eslintrc');
        fs.outputFileSync(filePath, contents);

        return filePath;
      });
  }
  return Promise.resolve(configPath);
};

ConfigDiff.prototype._loadConfig = function(configFilePath) {
  return new Config({
    configFile: configFilePath,
    useEslintrc: false,
  }).getConfig();
};

module.exports = ConfigDiff;
