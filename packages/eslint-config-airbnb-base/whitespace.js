/* eslint global-require: 0 */

const { CLIEngine } = require('eslint');

if (CLIEngine) {
  /* eslint no-inner-declarations: 0 */
  const assign = require('object.assign');
  const entries = require('object.entries');
  const whitespaceRules = require('./whitespaceRules');

  const baseConfig = require('.');

  const severities = ['off', 'warn', 'error'];

  function getSeverity(ruleConfig) {
    if (Array.isArray(ruleConfig)) {
      return getSeverity(ruleConfig[0]);
    }
    if (typeof ruleConfig === 'number') {
      return severities[ruleConfig];
    }
    return ruleConfig;
  }

  function onlyErrorOnRules(rulesToError, config) {
    const errorsOnly = assign({}, config);
    const cli = new CLIEngine({ baseConfig: config, useEslintrc: false });
    const baseRules = cli.getConfigForFile(require.resolve('./')).rules;

    entries(baseRules).forEach((rule) => {
      const ruleName = rule[0];
      const ruleConfig = rule[1];
      const severity = getSeverity(ruleConfig);

      if (rulesToError.indexOf(ruleName) === -1 && severity === 'error') {
        if (Array.isArray(ruleConfig)) {
          errorsOnly.rules[ruleName] = ['warn'].concat(ruleConfig.slice(1));
        } else if (typeof ruleConfig === 'number') {
          errorsOnly.rules[ruleName] = 1;
        } else {
          errorsOnly.rules[ruleName] = 'warn';
        }
      }
    });

    return errorsOnly;
  }

  module.exports = onlyErrorOnRules(whitespaceRules, baseConfig);
} else {
  const path = require('path');
  const { execSync } = require('child_process');

  module.exports = JSON.parse(String(execSync(path.join(__dirname, 'whitespace-async.js'))));
}
