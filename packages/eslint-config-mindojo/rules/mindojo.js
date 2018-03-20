module.exports = {
  rules: {
    // Ember has a different resolver, therefore we cannot rely on these rules for these specific modules.
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          'mindojo-core',
          'mindojo-payments',
          'ui-kit',
          '@ember',
        ]
      }
    ],

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': 0,

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      {
        ignorePackages: [
          'mindojo-core',
          'mindojo-payments',
          'ui-kit',
          '@ember',
        ]
      }
    ],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // allow just one var statement per function
    'one-var': 0,

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'initializations'],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['off'],

    // require return statements to either always or never specify values
    'consistent-return': 'warn',

    // enforce one true brace style
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['warn'],

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: true,
      allowAfterSuper: false,
    }],

    // require parens in arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    }],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  },
};
