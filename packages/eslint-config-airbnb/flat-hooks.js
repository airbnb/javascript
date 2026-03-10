const reactHooksPlugin = require('eslint-plugin-react-hooks');

const reactHooks = require('./rules/react-hooks');

module.exports = [
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: reactHooks.rules,
  },
];
