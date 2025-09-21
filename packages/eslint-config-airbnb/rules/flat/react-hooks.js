const reactHooksPlugin = require('eslint-plugin-react-hooks');
const base = require('../react-hooks');

module.exports = [{
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  languageOptions: {
    parserOptions: base.parserOptions
  },
  rules: base.rules
}];
