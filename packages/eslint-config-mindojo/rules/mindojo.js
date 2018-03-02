module.exports = {
  rules: {
    // Ember has a different resolver, therefore we cannot rely on these rules for these specific modules.
    'import/no-unresolved': [
      'error',
      {
        ignore: ['mindojo-core', 'mindojo-payments', 'ui-kit', '@ember']
      }
    ],

    'import/no-extraneous-dependencies': 0,

    'import/extensions': [
      'error',
      {
        ignorePackages: ['mindojo-core', 'mindojo-payments', 'ui-kit', '@ember']
      }
    ],

    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true
      }
    ],

    // Sample rules
    // 'class-methods-use-this': ['error', {
    //   exceptMethods: [],
    // }],

    // 'array-callback-return': 'error',
  },
};
