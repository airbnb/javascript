const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpIf = require('gulp-if');

function isFixed(file) {
  // Has ESLint fixed the file contents?
  return file.eslint && file.eslint.fixed;
}

gulp.task('lint', function() {
  // This glob doesn't need configured because we're just pulling all local JS
  // files and letting eslint handle any necessary ignores

  return gulp.src(['**/*.js', '!node_modules/**'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint({
      // Only autofix locally so changes are committed to git
      fix: !process.env.TEAMCITY_VERSION,
    }))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format(process.env.ESLINTFORMATTER || null))
    // Write fixes to file
    .pipe(gulpIf(isFixed, gulp.dest('.')))
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});
