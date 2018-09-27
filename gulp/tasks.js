/*
  tasks.js
  ===========
  defaults wraps generate-assets, watch and server
*/

var gulp = require('gulp')
var runSequence = require('run-sequence')

gulp.task('default', function (done) {
  runSequence('generate-assets',
    'watch', done)
})

gulp.task('generate-assets', function (done) {
  runSequence('clean',
    'sass',
    'copy-assets', done)
})

gulp.task('watch', function (done) {
  runSequence('watch-sass',
    'watch-assets',
    'browser-sync', done)
  console.log('App listening on port 3000')
})