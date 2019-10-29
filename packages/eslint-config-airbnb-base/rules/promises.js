module.exports = {
  plugins: ['promise'],

  rules: {
    // avoid calling `new` on static Promise methods
    'promise/no-new-statics': 'error',

    // avoid wrapping into `Promise.resolve` or `Promise.reject` unnecessarily
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
    'promise/no-return-wrap': 'error',

    // enforce consistent param names and ordering
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
    'promise/param-names': 'error',

    // prefer `await` to `then()`
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
    'promise/prefer-await-to-then': 'error',

    // callbacks are still in wide use, so they should be allowed
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md
    'promise/prefer-await-to-callbacks': 'off',

    // prefer creating Promises through the usage of async functions
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
    'promise/avoid-new': 'error',

    // would ensure the proper number of arguments are passed to Promise methods
    // can be enforced through static type checking
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
    'promise/valid-params': 'off',

    /* rules below are redundant when using async/await syntax: */
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'promise/no-native': 'off',
    'promise/no-nesting': 'off',
    'promise/no-promise-in-callback': 'off',
    'promise/no-callback-in-promise': 'off',
    'promise/no-return-in-finally': 'off'
  },
};
