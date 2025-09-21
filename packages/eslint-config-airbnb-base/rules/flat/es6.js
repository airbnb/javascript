const globals = require('globals');
const baseConfig = require('../es6');

module.exports = [{
  name: 'eslint-config-airbnb-base/es6',
  languageOptions: {
    globals: globals.es2015,
    parserOptions: baseConfig.parserOptions
  },
  rules: baseConfig.rules
}];
