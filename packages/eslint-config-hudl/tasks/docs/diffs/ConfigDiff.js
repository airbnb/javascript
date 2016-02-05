const path = require('path');
const request = require('request-promise');
const fs = require('fs-extra');
const _ = require('lodash');
const tmp = require('tmp');
const Config = require('eslint/lib/config');
const diff = require('deep-diff').diff;
const deepProperty = require('deep-property');
const shell = require('shelljs');
const Handlebars = require('handlebars');
const diffTemplatePath = require.resolve('./diff-template.md');
const diffSectionPartialPath = require.resolve('./diff-section-partial.md');
const ruleItemPartialPath = require.resolve('./rule-item-partial.md');

const npmPackageMatch = /^((eslint-config-airbnb)(\/[^@])?)@(\d+\.\d+\.\d+)$/;

shell.config.silent = true;

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

function diffRules(ourConfig, theirConfig, options) {
  const ruleOptions = options.rules;

  const ruleDifferences = (diff(ourConfig.rules, theirConfig.rules) || []).map(function(change) {
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
      isKnown = ruleOptions.added && _.isEqual(ruleOptions.added[change.path[0]], change.rhs);
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
      isKnown = ruleOptions.removed && _.includes(ruleOptions.removed, change.path[0]);
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
      isKnown = ruleOptions.edited && _.isEqual(ruleOptions.edited[change.path[0]], newValue);

      valueArrays = [
        diffValueChanges(prevValue, newValue, 'removed'),
        diffValueChanges(newValue, prevValue, 'added'),
      ];
    }

    // Shape objects for formatting
    valueArrays.forEach(function(valueArray) {
      valueArray.forEach(function(valueInfo, i) {
        // JSON-format values
        valueInfo.value = JSON.stringify(valueInfo.rawValue); // eslint-disable-line no-param-reassign

        // Add `last` flags for formatting purposes
        if (i === valueArray.length - 1) {
          valueInfo.last = true; // eslint-disable-line no-param-reassign
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
      category: 'rule',
    };
  });

  return ruleDifferences;
}

function diffEverythingElse(ourConfig, theirConfig /* , options */ ) {
  function cleanConfig(config) {
    const newConfig = _.cloneDeep(config);
    // Already diff'd
    delete newConfig.rules;
    // The effect of extends is present in the other items
    delete newConfig.extends;
    return newConfig;
  }

  return (diff(cleanConfig(ourConfig), cleanConfig(theirConfig)) || []).map(function(change) {
    const isKnown = false;
    const changeType = {
      N: 'added',
      D: 'removed',
      E: 'edited',
      A: 'edited',
    }[change.kind];

    function createValueArray(from, to, prop) {
      var value = {
        rawValue: deepProperty.get(from, prop),
      };
      if (value.rawValue === undefined) {
        return null;
      }
      value.value = JSON.stringify(value.rawValue);
      value.last = true;
      value[changeType] = true;
      return [value];
    }

    const fullProp = change.path.join('.');

    const valueArrays = _.compact([
      createValueArray(ourConfig, theirConfig, fullProp),
      createValueArray(theirConfig, ourConfig, fullProp),
    ]);

    return {
      name: fullProp,
      url: null,
      changeType: changeType,
      isKnown: isKnown,
      valueArrays: valueArrays,
      category: 'other',
    };
  });
}

function detailedDiff(ours, theirs, options) {
  const ruleDifferences = diffRules(ours.config, theirs.config, options);
  const otherDifferences = diffEverythingElse(ours.config, theirs.config, options);

  function organizePartitions(partitionedRules) {
    const categories = _.groupBy(partitionedRules, 'category');

    function groupRules(rules) {
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

      return groupsList;
    }

    return {
      ruleGroups: groupRules(categories.rules),
      otherItems: categories.other,
    };
  }

  function partitionEverything(rules) {
    const partitioned = _.partition(rules, 'isKnown');
    return {
      known: organizePartitions(partitioned[0]),
      unknown: organizePartitions(partitioned[1]),
    };
  }

  return partitionEverything(ruleDifferences.concat(otherDifferences));
}

function generateDiff(ours, theirs, options) {
  [ours.config, theirs.config].forEach(normalizeRules);
  return detailedDiff(ours, theirs, options);
}

ConfigDiff.prototype.writeDiff = function(options) {
  return this.compare(options.base, options.comparison, options.knownDifferences)
    .then(function(diffData) {
      const renderOutputPath = options.renderOutputPath;
      const writeOutputPath = options.writeOutputPath;

      function getUrl(configPath) {
        const match = npmPackageMatch.exec(configPath);
        if (match) {
          const packageVersion = match[4];
          const subpath = match[3] || '/index';
          return 'https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v' +
            packageVersion + '/packages/eslint-config-airbnb' + subpath + '.js';
        } else if (/^https?:/.test(configPath)) {
          return configPath;
        }
        return path.relative(path.dirname(renderOutputPath), configPath);
      }

      const templateData = {
        diff: diffData,
        base: getUrl(options.base),
        comparison: getUrl(options.comparison),
        title: options.title,
      };

      Handlebars.registerPartial('diffSection', fs.readFileSync(diffSectionPartialPath, 'utf8'));
      Handlebars.registerPartial('ruleItem', fs.readFileSync(ruleItemPartialPath, 'utf8'));

      fs.outputFileSync(writeOutputPath, Handlebars.compile(fs.readFileSync(diffTemplatePath, 'utf8'))(templateData));

      return 'Diff written to ' + writeOutputPath;
    });
};

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
  var url;
  if (/^https?:/.test(configPath)) {
    url = configPath;
    if (/^https:\/\/github.com/.test(configPath)) {
      url = configPath
        .replace(/https:\/\/github.com/, 'https://raw.githubusercontent.com')
        .replace('/blob/', '/');
    }
    return request(url)
      .then(function(contents) {
        const tmpDir = tmp.dirSync({
          unsafeCleanup: true,
        });
        const filePath = path.resolve(tmpDir.name, path.basename(configPath) || '.eslintrc');
        fs.outputFileSync(filePath, contents);

        return filePath;
      });
  } else if (npmPackageMatch.test(configPath)) {
    const match = npmPackageMatch.exec(configPath);

    const tmpDir = tmp.dirSync({
      unsafeCleanup: true,
    });

    const packageNameWithPath = match[1];
    const packageName = match[2];
    const packageVersion = match[4];

    shell.pushd(tmpDir.name);
    const result = shell.exec('npm i ' + packageName + '@' + packageVersion);
    if (result.code !== 0) {
      return Promise.reject(new Error('Error installing config package: ' + result.output));
    }

    const filePath = shell.exec('node -e "console.log(require.resolve(\'' +
      packageNameWithPath + '\'))"').output.trim();
    shell.popd();

    return Promise.resolve(filePath);
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
