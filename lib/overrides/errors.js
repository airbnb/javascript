// https://github.com/airbnb/javascript/blob/8cf2c70a4164ba2dad9a79e7ac9021d32a406487/packages/eslint-config-airbnb-base/rules/errors.js

module.exports = {
  rules: {
    // disallow assignment in conditional expressions
    //'no-cond-assign': ['error', 'always'],
    'no-cond-assign': ['error', 'except-parens'],

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    /*'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],*/
    'no-extra-parens': ['error', 'functions'],

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    //'valid-jsdoc': 'off',
    'valid-jsdoc': ['warn', {requireReturn: false}],
  }
};
