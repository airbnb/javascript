const path = require('path');
const request = require('request-promise');
const fs = require('fs-extra');
const _ = require('lodash');
const tmp = require('tmp');
const Config = require('eslint/lib/config');
const diff = require('deep-diff').diff;
const Handlebars = require('handlebars');
const diffTemplatePath = require.resolve('./diff-template.md');

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

function detailedDiff(ourConfig, theirConfig) {
  const differences = diff(ourConfig.rules, theirConfig.rules);
  const ruleDifferences = differences.map(function(change) {
    var valueArrays;
    var changeType;

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
      valueArrays = [
        change.lhs.map(function(value) {
          return {
            rawValue: value,
            removed: true,
          };
        }),
      ];
    } else {
      changeType = 'edited';

      const prevValue = ourConfig.rules[change.path[0]];
      const newValue = theirConfig.rules[change.path[0]];

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
      valueArrays: valueArrays,
    };
  });

  const templateData = {
    rules: _.sortBy(ruleDifferences, 'name'),
  };

  return Handlebars.compile(fs.readFileSync(diffTemplatePath, 'utf8'))(templateData);
}

function generateDiff(ours, theirs /* , options*/ ) {
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
  return detailedDiff(ours.config, theirs.config);
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
