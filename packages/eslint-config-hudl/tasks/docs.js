const gulp = require('gulp');
const writeDocs = require('./docs/writeDocs');

gulp.task('docs', function() {
  return writeDocs();
});
