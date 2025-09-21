const reactPlugin = require('eslint-plugin-react');
const base = require('../react');

module.exports = [{
  plugins: {
    react: reactPlugin
  },
  languageOptions: {
    parserOptions: base.parserOptions
  },
  rules: base.rules,
  settings: base.settings
}];
