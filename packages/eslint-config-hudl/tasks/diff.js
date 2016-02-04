const path = require('path');
const gulp = require('gulp');
const fs = require('fs-extra');
const ConfigDiff = require('./diff/ConfigDiff');

gulp.task('diff', function() {
  return new ConfigDiff()
    .compare(
      // 'https://raw.githubusercontent.com/hudl/javascript/master/linters/.eslintrc',
      require.resolve('./diff/current-config/.eslintrc'),
      require.resolve('../index.js'))
    .then(function(diff) {
      const outputPath = path.resolve('docs/comparisons/with-airbnb-master.md');
      fs.outputFile(outputPath, diff);
      console.log('Diff written to ', outputPath);
    });
});
