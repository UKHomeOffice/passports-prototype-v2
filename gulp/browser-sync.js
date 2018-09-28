var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function () {
    browserSync({
        proxy: "localhost:3000", // local node app address
        notify: false,
        open: false
    });
    gulp.watch("views/**").on('change', reload);
});