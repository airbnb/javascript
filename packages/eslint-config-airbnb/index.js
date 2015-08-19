const reactRules = require('./react');
const base = require('./base');

// clone this so we aren't mutating a module
const eslintrc = JSON.parse(JSON.stringify(base));

// manually merge in React rules
eslintrc.plugins = reactRules.plugins;
Object.keys(reactRules.rules).forEach(function assignRule(ruleId) {
  eslintrc.rules[ruleId] = reactRules.rules[ruleId];
});

module.exports = eslintrc;
