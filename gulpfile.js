const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
path = require('path');
const header = require('gulp-header');
const inlineFonts = require('gulp-inline-fonts');
const gulpSequence = require('gulp-sequence');
const rimraf = require('rimraf');
var replace = require('gulp-string-replace');

const rootpath = './src/assets/';
const stylespath = './src/assets/styles/';
const temppath = './src/assets/temp/';
const distpath = './src/assets/dist/';
const mixinpath = './src/assets/styles/mixins/';
const fontsinpath = './src/assets/styles/fonts/';
const fontsoutpath = './src/assets/dist/fonts/';
const rootvariables = ":root{--font-stack-en: 'Noto Sans','Noto Sans Devanagari','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya','Noto Nastaliq Urdu',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--font-stack-hi: 'Noto Sans Devanagari','Noto Sans','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya','Noto Nastaliq Urdu',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--font-stack-ur: 'Noto Sans','Noto Nastaliq Urdu','Noto Sans Devanagari','Noto Sans Tamil','Noto Sans Bengali','Noto Sans Malayalam','Noto Sans Gurmukhi','Noto Sans Gujarati','Noto Sans Telugu','Noto Sans Kannada','Noto Sans Oriya',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;--blue: #024f9d;--black: #000000;--green: #008840;--orange: #e55a28;--red: #ff4558;--white: #ffffff;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--yellow: #ffc107;--teal: #20c997;--cyan: #17a2b8;--gray-hs: 0,0%;";

/* Temp Folder - Copy all other files with imports appended at head*/
gulp.task('append-import', function () {
  return gulp.src([stylespath + '**/*.scss', !stylespath + '*.scss', !mixinpath +'**/*.scss'])
    .pipe(header('@import \'../mixins/mixins\';\n'))
    .pipe(header('@import \'../variables\';\n'))
    .pipe(gulp.dest(temppath));
});
/* Temp Folder - Copy files of level 1*/
gulp.task('copy-style', function () {
  return gulp.src([stylespath + 'styles.scss',  stylespath + '_variables.scss', stylespath + 'legacy.scss', stylespath + 'global.scss'])
    .pipe(gulp.dest(temppath));
});
/* Temp Folder - Copy mixins folder*/
gulp.task('copy-mixins', function () {stylespath
  return gulp.src([mixinpath + '**/*'])
    .pipe(gulp.dest(temppath + 'mixins/'));
});

/* Temp Folder - Fonts folder*/
gulp.task('fonts', function() {
  return gulp.src([fontsinpath + '**/*.woff', fontsinpath + '**/*.woff2'])
    .pipe(inlineFonts({ name: 'allnotosans' }))
    .pipe(gulp.dest(fontsoutpath));
});

/* Generate Components CSS files from temp folder */
gulp.task('scss-components', function () {
  return gulp.src([temppath + '**/*.scss', '!./src/assets/temp/mixins/**/*.scss', !temppath + '*.scss'])
    .pipe(sourcemaps.init())
    .pipe(rename(function (path) { //since sass() wont compile _partials files we are removing it here
      path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
    }))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(rename(function (file) { 
      const parentFolder = path.dirname(file.dirname);
      file.dirname = path.join(parentFolder, 'components'); //generated file extension
    }))
    .pipe(gulp.dest(distpath));
});

/* Generate Main CSS files from temp folder */
gulp.task('scss-main', function () {
  return gulp.src([stylespath + 'styles.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(distpath));
});

/* replace root variables */
gulp.task('rm-root', function() {
  gulp.src([distpath + 'styles.css'])
    .pipe(replace(rootvariables, " "))
    .pipe(gulp.dest(distpath + 'new'))
});

/* delete folders */
gulp.task('clean', function(cb) {
  // rimraf.sync(distpath + '**/*');
  // rimraf.sync(temppath + '**/*');
  rimraf(distpath, cb);rimraf(temppath, cb);
});

/* Watch SCSS files */
gulp.task('watch', function () {
  gulp.watch(stylespath + '**/*.scss', gulpSequence('clean','append-import', 'copy-style', 'copy-mixins', 'scss-components', 'fonts', 'scss-main'));
});

gulp.task('default', gulpSequence('clean','append-import', 'copy-style', 'copy-mixins', 'scss-components', 'fonts', 'scss-main','watch')); //