/*
  copy.js
  ===========
  copies images and javascript folders to public
*/

var gulp = require('gulp')
var config = require('./config.json')
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify')

gulp.task('copy-assets', ['copy-js'], function () {
  return gulp.src([config.paths.assets + 'images/**'])
    .pipe(gulp.dest(config.paths.public + 'images'))
})

gulp.task('copy-js', function () {
  return browserify(config.paths.assets + 'javascripts/app.js')
    .bundle()
    .pipe(source('app.js')) // Readable Stream -> Stream Of Vinyl Files
    .pipe(buffer()) // Vinyl Files -> Buffered Vinyl Files
    // Gulp Plugins Here
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.public + 'javascripts'))
})