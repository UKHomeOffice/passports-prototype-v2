/*
  copy.js
  ===========
  copies images and javascript folders to public
*/

var gulp = require('gulp')
var config = require('./config.json')
var babel = require('gulp-babel');

gulp.task('copy-assets', function () {
  return gulp.src([config.paths.assets + 'images/**'])
    .pipe(gulp.dest(config.paths.public + 'images'))
})

gulp.task('copy-js', function () {
  return gulp.src([
      'node_modules/babel-polyfill/dist/polyfill.js',
      config.paths.assets + 'javascripts/**'
    ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest(config.paths.public + 'javascripts'))
})