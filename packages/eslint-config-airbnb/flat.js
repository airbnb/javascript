const reactPlugin = require('eslint-plugin-react');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

const baseFlatConfig = require('eslint-config-airbnb-base/flat');

const react = require('./rules/react');
const reactA11y = require('./rules/react-a11y');

module.exports = [
  ...baseFlatConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: react.settings,
    rules: {
      ...react.rules,
      ...reactA11y.rules,
    },
  },
];
