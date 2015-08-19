var reactRules = require('./react');
var base = require('./base');

// clone this so we aren't mutating a module
var eslintrc = JSON.parse(JSON.stringify(base));

// manually merge in React rules
eslintrc.plugins = reactRules.plugins;
Object.keys(reactRules.rules).forEach(function(ruleId) {
  eslintrc.rules[ruleId] = reactRules.rules[ruleId];
});

module.exports = eslintrc;
