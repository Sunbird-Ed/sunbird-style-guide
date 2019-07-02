const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
path = require('path');
const header = require('gulp-header');

/* Temp Folder - Copy all other files with imports appended at head*/
gulp.task('append-import', function() {
  return gulp.src(['./src/assets/styles/**/*.scss','!./src/assets/styles/*.scss','!./src/assets/styles/mixins/**/*.scss'])
  .pipe(header('@import \'../mixins/mixins\';\n'))
  .pipe(header('@import \'../variables\';\n'))
  .pipe(gulp.dest('./src/assets/temp'));
});
/* Temp Folder - Copy files of level 1*/
gulp.task('copy-style', function() {
  return gulp.src(['./src/assets/styles/styles.scss','./src/assets/styles/_variables.scss','./src/assets/styles/legacy.scss','./src/assets/styles/global.scss'])
  .pipe(gulp.dest('./src/assets/temp'));
});
/* Temp Folder - Copy mixins folder*/
gulp.task('copy-mixins', function() {
  return gulp.src(['./src/assets/styles/mixins/**/*'])
  .pipe(gulp.dest('./src/assets/temp/mixins'));
});

/* Generate Components CSS files from temp folder */
gulp.task('scss-components', function () {
  return gulp.src(['./src/assets/temp/**/*.scss','!./src/assets/temp/mixins/**/*.scss','!./src/assets/temp/*.scss'])
  .pipe(sourcemaps.init())
  .pipe(rename(function(path) { //since sass() wont compile _partials files we are removing it here
    path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
  }))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(rename(function (file) {
    const parentFolder = path.dirname(file.dirname);
    file.dirname = path.join(parentFolder, 'components'); //generated file extension
  }))
  .pipe(gulp.dest('./src/assets/dist/'));
});
/* Generate Main CSS files from temp folder */
gulp.task('scss-main', function () {
  return gulp.src(['./src/assets/styles/styles.scss'])
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./src/assets/dist/'));
});

/* Watch SCSS files */
// gulp.task('watch', function() {
//   gulp.watch('./src/assets/styles/**/*.scss', ['copy-style','copy-mixins','append-import','scss-components','scss-main']);
// });

gulp.task('default', ['copy-style','copy-mixins','append-import','scss-components','scss-main']);//,'watch'
