const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');


/* Generate Main CSS files from styles folder */
gulp.task('scss-main', function() {
    return gulp.src(['css/style.scss'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});
/*========================
    Watcher
==========================*/

gulp.task('watch', function() {
    gulp.watch('**/*.scss', ['scss-main']);
});

/* Default task */
gulp.task('default', ['scss-main','watch']);