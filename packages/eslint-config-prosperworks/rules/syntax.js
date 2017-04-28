// Allow autofix
module.exports = {
  rules: {
    // 3.1
    'no-new-object': 'error',
    // 3.3, 3.4
    'object-shorthand': 'error',
    // 4.1
    'no-array-constructor': 'error',
    // 7.10
    'no-new-func': 'error',
    // 12.1
    'dot-notation': 'error',
    // 15.5
    'no-case-declarations': 'error',
    // 19.1
    'comma-style': 'error',
    // 19.2
    'comma-dangle': ['error', 'always-multiline'],
    // 20.1
    semi: 'error',
    // 7.14
    'prefer-spread': 'error',
    // 13.2
    'one-var': ['error', 'never'],
    // 21.3
    radix: 'error',
    // Arrow Functions
    // 8.1
    'prefer-arrow-callback': 'error',
    // Enforce consistency
    'arrow-parens': 'error',
    // Enforce consistency
    'arrow-body-style': ['error', 'always'],
    // Enforce consistency
    'no-confusing-arrow': 'error',

    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'no-undef': 'error',
  },
};
