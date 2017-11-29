// https://github.com/airbnb/javascript/blob/8cf2c70a4164ba2dad9a79e7ac9021d32a406487/packages/eslint-config-airbnb-base/rules/best-practices.js

module.exports = {
  rules: {
    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    //eqeqeq: ['error', 'always', { null: 'ignore' }],
    eqeqeq: ['error', 'smart'],

    // disallow the use of alert, confirm, and prompt
    //'no-alert': 'warn',
    'no-alert': 'error',

    // disallow this keywords outside of classes or class-like objects
    //'no-invalid-this': 'off',
    'no-invalid-this': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    /*
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
      ]
      }],*/
    'no-param-reassign': 'off',

    // disallow use of assignment in return statement
    //'no-return-assign': ['error', 'always'],
    'no-return-assign': ['error', 'except-parens'],

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    //'no-unmodified-loop-condition': 'off',
    'no-unmodified-loop-condition': 'warn',

    // disallow unnecessary .call() and .apply()
    //'no-useless-call': 'off',
    'no-useless-call': 'warn',

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    //'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    //'require-await': 'off',
    'require-await': 'warn',

    // requires to declare all vars on top of their containing scope
    //'vars-on-top': 'error',
    'vars-on-top': 'warn',
  }
};
