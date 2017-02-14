module.exports = [
  {
    // 'https://raw.githubusercontent.com/hudl/javascript/master/linters/.eslintrc',

    title: 'vs Airbnb v14.1.0',
    outputName: 'with-airbnb-master',
    base: require.resolve('../../../index.js'),
    comparison: 'eslint-config-airbnb@14.1.0',
    knownDifferences: {
      // Known rule differences
      rules: {
        edited: {
          // TODO these are just examples
          // 'indent': [2, 2, {
          //   'SwitchCase': 1,
          //   'VariableDeclarator': 1,
          // }],
        },
        added: {
          // TODO these are just examples
          // 'array-bracket-spacing': [2, 'never'],
        },
        removed: [
          // 'array-bracket-spacing'
        ],
      },
    },
  },

];
