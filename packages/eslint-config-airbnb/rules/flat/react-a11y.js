const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactPlugin = require('eslint-plugin-react');
const base = require('../react-a11y');

module.exports = {
  plugins: {
    'jsx-a11y': jsxA11yPlugin,
    react: reactPlugin
  },
  languageOptions: {
    parserOptions: base.parserOptions
  },
  rules: base.rules
};
