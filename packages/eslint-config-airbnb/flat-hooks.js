const reactHooksPlugin = require('eslint-plugin-react-hooks');

const reactHooks = require('./rules/react-hooks');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
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
