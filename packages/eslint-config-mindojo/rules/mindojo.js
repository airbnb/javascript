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
  }
};
