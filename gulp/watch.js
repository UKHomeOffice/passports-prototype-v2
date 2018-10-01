/*
  watch.js
  ===========
  watches sass/js/images/html
  browsersync reloads the page on change

*/

var gulp = require('gulp')
var config = require('./config.json')
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('watch-sass', function () {
  return gulp.watch(config.paths.assets + 'sass/**', {
    cwd: './'
  }, ['sass'])
})

gulp.task('watch-assets', function () {
  return gulp.watch([config.paths.assets + 'images/**',
    config.paths.assets + 'javascripts/**', 'views/**'
  ], {
    cwd: './'
  }, ['copy-assets']).on('change', reload);
})

gulp.task('browser-sync', function () {
  browserSync({
    proxy: "localhost:3000", // local node app address
    notify: false,
    open: false
  });
});