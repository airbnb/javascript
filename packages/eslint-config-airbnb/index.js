const react = require('./react');
const base = require('./base');
const defaultsDeep = require('lodash.defaultsdeep');

// clone this so we aren't mutating a module
const eslintrc = JSON.parse(JSON.stringify(base));
const reactRules = JSON.parse(JSON.stringify(react));

module.exports = defaultsDeep(reactRules, eslintrc);
