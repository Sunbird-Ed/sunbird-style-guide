var gulp = require('gulp');
    sass = require('gulp-sass');
    sourcemaps = require('gulp-sourcemaps');
    rename = require('gulp-rename');
    path = require('path');
    sassPartialsImported = require('gulp-sass-partials-imported');
    fs = require("fs");


//style paths
var sassFiles = 'sb-components.scss',
    cssDest = 'dist/';

gulp.task('styles', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});
gulp.task('watch',function() {
    gulp.watch(sassFiles,['styles']);
});


gulp.task('sass', function () {
    return gulp
      .src('./src/assets/styles/component/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(rename(function(path) {
        path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
      }))
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
       
       // rename the current file's parent directory

      .pipe(rename(function (file) {
        let parentFolder = path.dirname(file.dirname)
        file.dirname = path.join(parentFolder, 'css');
      }))
      .pipe(gulp.dest('dist/component-list'));
  });
