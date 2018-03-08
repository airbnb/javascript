module.exports = {
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['mindojo-core', 'mindojo-payments', 'ui-kit']
      }
    ],

    // Sample rules
    // 'class-methods-use-this': ['error', {
    //   exceptMethods: [],
    // }],

    // 'array-callback-return': 'error',

    'one-var': 0,

    'one-var-declaration-per-line': ['error', 'initializations'],

    'prefer-destructuring': ['off'],

    'consistent-return': 'warn',

    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: true,
      allowAfterSuper: false,
    }],

    'no-param-reassign': ['warn'],

    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],

    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    }],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  },
};
