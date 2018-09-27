/*
  sass.js
  ===========
  compiles sass from assets folder
  also includes sourcemaps
*/

var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var bs = require('browser-sync').create();

var config = require('./config.json')

gulp.task('sass', function () {
  return gulp.src(config.paths.assets + '/sass/*.scss')
    .pipe(sass({
      importer: require('npm-sass').importer
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.public + '/stylesheets/'))
    .pipe(bs.reload({
      stream: true
    }))
})