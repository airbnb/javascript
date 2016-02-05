module.exports = [
  {
    // 'https://raw.githubusercontent.com/hudl/javascript/master/linters/.eslintrc',

    title: 'vs Airbnb v5.0.0',
    outputName: 'with-airbnb-master',
    base: require.resolve('../../../index.js'),
    comparison: 'eslint-config-airbnb@5.0.0',
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
  {
    title: 'vs hudl/javascript before packaging refactor',
    outputName: 'before-packaging-refactor',
    base: require.resolve('../../../index.js'),
    comparison: 'https://github.com/hudl/javascript/blob/53f28eea91be00b7b167deb865ff7468de743b85/linters/.eslintrc',
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
