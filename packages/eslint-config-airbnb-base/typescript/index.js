const { rules: baseBestPracticesRules } = require('../rules/best-practices');
const { rules: baseErrorsRules } = require('../rules/errors');
const { rules: baseES6Rules } = require('../rules/es6');
const { rules: baseStyleRules } = require('../rules/style');
const { rules: baseVariablesRules } = require('../rules/variables');

module.exports = {
  extends: [
    // disable checks overlapping with the ones built into ts
    'plugin:@typescript-eslint/eslint-recommended',

    // follow basic ts guidelines
    'plugin:@typescript-eslint/recommended',

    // add support for resolving ts imports
    'plugin:import/typescript'
  ],

  rules: {
    // interfaces can be implemented, extended and augmented
    // https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#types-or-interfaces
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/prefer-function-type': 'error',

    /* override base config, preferring rules relying on type info: */

    'brace-style': 'off',
    '@typescript-eslint/brace-style': baseStyleRules['brace-style'],

    camelcase: 'off',
    '@typescript-eslint/camelcase': baseStyleRules.camelcase,

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

    indent: 'off',
    '@typescript-eslint/indent': baseStyleRules.indent,

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
      baseStyleRules['no-array-constructor'],

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function':
      baseBestPracticesRules['no-empty-function'],

    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers':
      baseBestPracticesRules['no-magic-numbers'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        ...baseVariablesRules['no-use-before-define'][1],
        typedefs: true
      }
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      baseES6Rules['no-useless-constructor'],

    quotes: 'off',
    '@typescript-eslint/quotes': baseStyleRules.quotes,

    semi: 'off',
    '@typescript-eslint/semi': baseStyleRules.semi
  }
};
