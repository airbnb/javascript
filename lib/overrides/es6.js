// https://github.com/airbnb/javascript/blob/8cf2c70a4164ba2dad9a79e7ac9021d32a406487/packages/eslint-config-airbnb-base/rules/es6.js

module.exports = {
  rules: {
    // suggest using arrow functions as callbacks
    /*'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],*/
    'prefer-arrow-callback': ['warn', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    }],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    /*'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],*/
    'prefer-destructuring': ['warn', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
  }
};
