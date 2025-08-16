const stylisticJs = require('@stylistic/eslint-plugin-js');
const importPlugin = require('eslint-plugin-import');
const bestPractices = require('./rules/best-practices');
const errors = require('./rules/errors');
const node = require('./rules/node');
const style = require('./rules/style');
const variables = require('./rules/variables');
const es6 = require('./rules/es6');
const imports = require('./rules/imports');
const strict = require('./rules/strict');

module.exports = {
  plugins: {
    '@stylistic/js': stylisticJs,
    import: importPlugin,
  },
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  rules: {
    ...bestPractices.rules,
    ...errors.rules,
    ...node.rules,
    ...style.rules,
    ...variables.rules,
    ...es6.rules,
    ...imports.rules,
    ...strict.rules,
  },
};
