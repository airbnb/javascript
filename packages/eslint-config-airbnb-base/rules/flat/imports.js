const importPlugin = require('eslint-plugin-import');
const globals = require('globals');
const baseConfig = require('../imports');

module.exports = [importPlugin.flatConfigs.recommended, {
  name: 'eslint-config-airbnb-base/imports',
  languageOptions: {
    globals: globals.es2015,
    parserOptions: baseConfig.parserOptions
  },
  settings: baseConfig.settings,
  rules: baseConfig.rules
}];
