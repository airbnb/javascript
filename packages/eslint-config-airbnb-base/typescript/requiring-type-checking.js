const { rules: baseBestPracticesRules } = require('../rules/best-practices');

module.exports = {
  extends: 'plugin:@typescript-eslint/recommended-requiring-type-checking',

  rules: {
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      { ignoreRhs: true }
    ],

    // specifying a default type which is then given may be a code smell
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowNullable: true, ignoreRhs: true }
    ],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    /* override base config, preferring rules relying on type info: */

    'require-await': 'off',
    '@typescript-eslint/require-await': baseBestPracticesRules['require-await']
  }
};
