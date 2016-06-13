'use strict';

// Dependencies
const fs = require('fs');

var gulp = require('gulp');
var cached = require('gulp-cached');
var del = require('del');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var newer = require('gulp-newer');
var nodemon = require('gulp-nodemon');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var rename = require("gulp-rename");
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');
var usemin = require('gulp-usemin');
var zip = require('gulp-zip');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var rimraf = require('rimraf');
var open = require('gulp-open');
var _ = require('lodash');

// Import all tasks
fs.readdirSync('./tasks').forEach(function(taskFile) {
  require('./tasks/'+taskFile);
});

// config

var SRC_DIR = './client';
var clientJsFiles = [
  sourcePath('**/*.js'),
  '!' + sourcePath('vendor/**/*.js')
];

var serverJsFiles = [
  './server/**/*.js',
  './test/**/*.js'
];

var allJsFiles = clientJsFiles.concat(serverJsFiles);

gulp.task('default', ['usemin']);

// TODO move all tasks to the ./tasks folder

gulp.task('develop', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['client/**', 'public/**', 'node_modules/**']
  })
    .on('start', ['less', 'watch'])
    //.on('change', ['less'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('clean', function (cb) {
  return del([
    'public/**/*',
    // ignore these folders, only copy once
    '!public/assets/**',
    '!public/fonts/**'
  ]);
});

gulp.task('watch:less', function () {
  gulp.watch(sourcePath('**/*.less'), ['less']);
});

gulp.task('watch:templates', function () {
  gulp.watch(sourcePath('**/*.html'), ['templates']);
});

gulp.task('watch:transpile', function() {
  // clean the transpiled folder
  rimraf.sync(sourcePath('.tmp/js'));

  // transpile files when they change
  gulp.watch(clientJsFiles, function(event) {
    var dest = event.path.replace(__dirname + '/client', '');
    rimraf.sync(dest);
    return transpile(event.path, path.dirname(dest));
  });

  // transpile the whole project
  return transpile(clientJsFiles);
});

// add to watch task once warnings are fixed
gulp.task('watch:lint', function() {

  gulp.watch(allJsFiles, function(event) {
    return lint(event.path);
  });

  return lint(allJsFiles);
});

gulp.task('lint', function() {
  // too many warnings to return a meaningfulerror
  // lint(allJsFiles);
  return lint(clientJsFiles);
});

gulp.task('watch:js', function () {
  gulp.watch(sourcePath('**/*.js'), ['test'])
});

var openBrowser = _.once(() => gulp.src(__filename).pipe(open({ uri: 'http://localhost:3000/' })));

gulp.task('watch', ['watch:templates', 'watch:less', 'watch:transpile'], function() {
  createTmpIndex(openBrowser);
});

gulp.task('templates', ['template-cache-components', 'template-cache-app']);

gulp.task('copy', ['copy-root', 'copy-fonts', 'copy-assets']);

gulp.task('copy-root', ['clean'], function () {
  var files = ['403.html', '404.html', 'forbidden.html', 'robots.txt'].map(sourcePath);
  return gulp.src(files)
  //.pipe(cached('copy-root'))
  .pipe(gulp.dest('public'))
  .on('error', console.error);
});

gulp.task('copy-fonts', ['clean'], function () {
  return gulp.src(sourcePath('/vendor/ionicons/fonts/*'))
  .pipe( newer('public/fonts') )
 // .pipe(cached('copy-fonts'))
  .pipe(gulp.dest('public/fonts'))
  .on('error', console.error);
});

gulp.task('copy-assets', ['clean'], function () {
  var files = ['assets/*', 'assets/**/*'].map(sourcePath);
  return gulp.src(files)
  .pipe( newer('public/assets') )
  //.pipe(cached('copy-assets'))
  .pipe(gulp.dest('public/assets'))
  .on('error', console.error);
});

gulp.task('less', function () {
  return gulp.src( sourcePath('styles.less') )
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./', {
      sourceRoot: '/'
    }))
    .pipe(gulp.dest( sourcePath('.tmp') ))
    .on('error', console.error);
});

gulp.task('usemin', ['copy', 'less', 'templates'], function () {

  var minifyCssOptions = {
    keepSpecialComments: 0,
    relativeTo: 'public/',
    cache: true
  };

  var uglifyOptions = {
    mangle: false,
    compress: false
  };

  var eslintOptions = {
    parserOptions: {
      ecmaVersion: 6
    },
    rules: {
      "no-debugger": 2
    }
  };

  var babelObtions = {
    presets: ['es2015']
  };

  var useminOptions = {
    css: [sourcemaps.init({loadMaps: true}), minifyCSS(minifyCssOptions), 'concat', rev(), sourcemaps.write('./')],
    //css: [rev()],
    jsApp: [
      eslint(eslintOptions),
      eslint.failOnError(),
      sourcemaps.init(),
      babel(babelObtions),
      'concat',
      uglify(uglifyOptions),
      rev(),
      sourcemaps.write('./')
    ],
    jsVendor: ['concat', uglify(uglifyOptions), rev()]
  };

  return gulp.src(sourcePath('index.html'))
  .pipe(usemin(useminOptions))
  .pipe(gulp.dest('public'))
  .on('error', console.error);

});

gulp.task('template-cache-components', function () {

  var optionsTblCache = {
    standalone: true,
    root: 'components'
  };

  return gulp.src(sourcePath('components/**/*.html'))
  //.pipe(minifyHTML({ empty: true }))
  .pipe(templateCache(optionsTblCache))
  .pipe(rename('templates-components.js'))
  .pipe(gulp.dest(sourcePath('.tmp')))
  .on('error', console.error);

});

gulp.task('template-cache-app', function () {

  var optionsTblCache = {
    standalone: false,
    root: 'app'
  };

  return gulp.src(sourcePath('app/**/*.html'))
  .pipe(minifyHTML({ empty: true }))
  .pipe(templateCache(optionsTblCache))
  .pipe(rename('templates-app.js'))
  .pipe(gulp.dest(sourcePath('.tmp')))
  .on('error', console.error);

});

gulp.task('compress', function () {
  // using cwd option allows us to save folder structure
  return gulp.src([
    '**/*'
    ], { cwd: __dirname + "/public" })
    .pipe(zip('public.zip'))
    .pipe(gulp.dest('public'));
});

gulp.task('transpile', function() {
  rimraf.sync('.tmp/js');
  transpile(clientJsFiles);
})

// utils

function lint(src) {
  return gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function transpile(src, dest) {
  dest = dest || '';
  var dirname = sourcePath('.tmp/js' + dest);

  console.log(getTime() + ' Begin Transpiling: ' + (dest || src));

  return gulp.src(src)
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015'],
      sourceMaps: 'inline'
    }))
    .pipe(gulp.dest(dirname))
    .on('end', function() {
      console.log(getTime() + ' Finished transpiling');
    })
}

function createTmpIndex(callback) {
  fs.readFile(sourcePath('index.html'), 'utf8', function(err, file) {
    if (err) return console.error(err);

    var modified = file
      .replace(RegExp('<script src="components/', 'g'), '<script src=".tmp/js/components/')
      .replace(RegExp('<script src="app/', 'g'), '<script src=".tmp/js/app/')

    fs.writeFile(sourcePath('.tmp/index.html'), modified, 'utf8', callback)
  });
}

function withZero(number) {
  return number < 10 ? '0' + number : number;
}

function getTime() {
  var time = new Date();
  return '['
    + withZero(time.getHours()) + ':'
    + withZero(time.getMinutes()) + ':'
    + withZero(time.getSeconds()) + '::'
    + time.getMilliseconds()
    + ']';
}

function sourcePath (filename) {
  return path.join(SRC_DIR, filename);
}
