// Allow autofix
module.exports = {
  rules: {
    // Autofixable ---------------------------------------------------------------------------------

    // editorconfig
    'no-trailing-spaces': 'error',

    // 8.1
    'arrow-spacing': 'error',
    // 16.2
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 7.11
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    // 7.11, 18.2
    'space-before-blocks': 'error',
    // 18.1
    indent: ['error', 2, { SwitchCase: 1 }],
    // 18.3
    'keyword-spacing': 'error',
    // 'keyword-spacing': ['error', {before: false, after: false }],
    // 18.4
    'space-infix-ops': 'error',
    // 18.5
    'eol-last': 'error',
    // 18.6
    'no-whitespace-before-property': 'error',
    // 18.8
    'padded-blocks': ['error', 'never'],
    // 18.9
    'space-in-parens': 'error',
    // 18.10
    'array-bracket-spacing': 'error',
    // 18.11
    'object-curly-spacing': ['error', 'always'],

    // 6.3
    'template-curly-spacing': 'error',
    // 11.3
    'generator-star-spacing': ['error', { before: false, after: true }],

    // Extra Rules ---------------------------------------------------------------------------------
    'key-spacing': ['error', { mode: 'minimum' }],
    'no-multi-spaces': ['error', { exceptions: {
      Property: true,
    } }],
    'comma-spacing': 'error',

    // Not Autofixable -----------------------------------------------------------------------------
    // 18.12
    'max-len': ['warn', {
      code: 100,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    // 18.6
    // 'newline-per-chained-call': 'warn',

    // Optional ------------------------------------------------------------------------------------
    // 'spaced-comment': 'error',
  },
};
