const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
path = require('path');
var header = require('gulp-header');

gulp.task('import', function() {
    return gulp.src(['./src/assets/styles/**/*.scss','!./src/assets/styles/*.scss','!./src/assets/styles/mixins/**/*.scss'])
      .pipe(header('@import \'../mixins/mixins\';\n'))
      .pipe(header('@import \'../variables\';\n'))
      .pipe(gulp.dest('./src/assets/temp'));
});

gulp.task('copy-style', function() {
    return gulp.src(['./src/assets/styles/styles.scss','./src/assets/styles/_variables.scss','./src/assets/styles/legacy.scss','./src/assets/styles/global.scss'])
      .pipe(gulp.dest('./src/assets/temp'));
});
gulp.task('copy-mixins', function() {
    return gulp.src(['./src/assets/styles/mixins/**/*'])
      .pipe(gulp.dest('./src/assets/temp/mixins'));
});

gulp.task('scss', function () {
    return gulp.src('./src/assets/temp/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(rename(function(path) { //since sass() wont compile _partials files we are removing it here
        path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
      }))
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(rename(function (file) {
        let parentFolder = path.dirname(file.dirname)
        file.dirname = path.join(parentFolder, 'css');//generated file extension
      }))
      .pipe(gulp.dest('./src/assets/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/assets/styles/**/*.scss', ['copy-mixins','copy-style','import','scss']);
});

gulp.task('default', ['copy-mixins','copy-style','import','scss']);