/* eslint quote-props:[2, "consistent"] */

const path = require('path');
const gulp = require('gulp');
const fs = require('fs-extra');
const ConfigDiff = require('./diff/ConfigDiff');

gulp.task('diff', function() {
  const knownRuleDifferences = {
    edited: {
      // TODO these are just examples
      'indent': [2, 2, {
        'SwitchCase': 1,
        'VariableDeclarator': 1,
      }],
    },
    added: {
      // TODO these are just examples
      'array-bracket-spacing': [2, 'never'],
    },
    removed: [
      // 'array-bracket-spacing'
    ],
  };
  return new ConfigDiff()
    .compare(
      // 'https://raw.githubusercontent.com/hudl/javascript/master/linters/.eslintrc',
      require.resolve('./diff/current-config/.eslintrc'),
      require.resolve('../index.js'),
      knownRuleDifferences)
    .then(function(diff) {
      const outputPath = path.resolve('docs/comparisons/with-airbnb-master.md');
      fs.outputFile(outputPath, diff);
      console.log('Diff written to ', outputPath);
    });
});
