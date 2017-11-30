// https://github.com/airbnb/javascript/blob/8cf2c70a4164ba2dad9a79e7ac9021d32a406487/packages/eslint-config-airbnb-base/rules/style.js

module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // TODO: enable? semver-major
    //'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }
    'array-bracket-newline': ['error', 'consistent'],

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    // TODO: enable? semver-major
    //'array-element-newline': ['off', { multiline: true, minItems: 3 }],
    'array-element-newline': 'off', // Doesn't work as expected, need https://github.com/eslint/eslint/issues/9457 to be implemented

    // require camel case names
    //camelcase: ['error', { properties: 'never' }],
    camelcase: ['error', { properties: 'always' }],

    // require trailing commas in multiline object literals
    /*'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],*/
    'comma-dangle': ['error', 'only-multiline'],

    // enforce newline at the end of file, with no multiple empty lines
    //'eol-last': ['error', 'always'],
    'eol-last': 'off',

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    //'func-names': 'warn',
    'func-names': ['warn', 'as-needed'],

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    //'func-style': ['off', 'expression'],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    //'function-paren-newline': ['error', 'multiline'],
    'function-paren-newline': ['warn', 'consistent'], // This is very strict the rule, so switch to warn

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    /*'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],*/
    'line-comment-position': 'off',

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    //'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    /*'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],*/
    'lines-around-directive': 'off',

    // specify the maximum depth that blocks can be nested
    //'max-depth': ['off', 4],
    'max-depth': ['warn', 4],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    /*'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],*/
    'max-len': ['error', 200, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the maximum depth callbacks can be nested
    //'max-nested-callbacks': 'off',
    'max-nested-callbacks': ['warn', { max: 2 }],

    // limits the number of parameters that can be used in the function declaration.
    //'max-params': ['off', 3],
    'max-params': ['warn', { max: 5 }],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    //'multiline-ternary': ['off', 'never'],
    'multiline-ternary': ['error', 'always-multiline'],

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    //'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    //'no-negated-condition': 'off',
    'no-negated-condition': 'warn',

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    //'no-plusplus': 'error',
    'no-plusplus': 'off',

    // disallow dangling underscores in identifiers
    /*'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false,
    }],*/
    'no-underscore-dangle': 'off',

    // require padding inside curly braces
    //'object-curly-spacing': ['error', 'always'],
    'object-curly-spacing': ['warn', 'always'],

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    /*'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true }
    }],*/
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true }
    }],

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    //'operator-assignment': ['error', 'always'],
    'operator-assignment': ['warn', 'always'],

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    /*'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],*/
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
      }],

    // require or disallow spaces inside parentheses
    //'space-in-parens': ['error', 'never'],
    'space-in-parens': ['warn', 'never'],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    /*'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true,
      }
    }],*/
    'spaced-comment': ['warn', 'always',  {// http://eslint.org/docs/rules/spaced-comment
      'exceptions': ['*'],
      'markers': ['@TODO:', '@NOTE:', '@FIXME:', '@HACK:']
    }],
  }
};
