module.exports = {
  rules: {
    // 4.5
    'array-callback-return': 'error',
    // 7.2
    'wrap-iife': 'error',
    // 7.3
    'no-loop-func': 'error',
    // Maybe this should be in es6.js
    // 7.6
    'prefer-rest-params': 'error',
    // 7.10 dupe in syntax.js
    'no-new-func': 'error',
    // 7.12, 7.13
    'no-param-reassign': ['error', { props: true }],
  },
};
