/*
  browser-sync.js
  ===========
  uses browsersync to watch for html changes,
  nodemon to run a server, watches for javascript and json changes
*/

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "localhost:3000",
        notify: false
    });
    gulp.watch("views/**").on("change", reload);
});