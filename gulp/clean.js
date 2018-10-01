/*
  clean.js
  ===========
  removes folders:
    - public
*/

var gulp = require('gulp')
var clean = require('gulp-clean')

var config = require('./config.json')

gulp.task('clean', function () {
  return gulp.src([config.paths.public + '/*',
      '.port.tmp'
    ], {
      read: false
    })
    .pipe(clean())
})