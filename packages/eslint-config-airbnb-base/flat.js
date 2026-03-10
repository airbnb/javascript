const globals = require('globals');
const importPlugin = require('eslint-plugin-import');

const bestPractices = require('./rules/best-practices');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const imports = require('./rules/imports');
const node = require('./rules/node');
const strict = require('./rules/strict');
const style = require('./rules/style');
const variables = require('./rules/variables');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.es2015,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          generators: false,
          objectLiteralDuplicateProperties: false,
        },
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: imports.settings,
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
  },
];
