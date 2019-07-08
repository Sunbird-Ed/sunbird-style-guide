const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const header = require('gulp-header');
const inlineFonts = require('gulp-inline-fonts');
const gulpSequence = require('gulp-sequence');
const rimraf = require('rimraf');
const inline = require('gulp-inline-fonts');
const concat = require('gulp-concat');
const merge  = require('merge-stream');
path = require('path');

/* Inline Fonts */
// Urdu
gulp.task('noto-nastaliqurdu', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/noto-nastaliqurdu/NotoNastaliqUrdu-Regular.woff')
  .pipe(inline({ name: 'Noto Nastaliq Urdu', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff'] })));
  return fontStream.pipe(concat('noto-nastaliqurdu.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/noto-nastaliqurdu'));
});
// English
gulp.task('notosans', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans/latin-ext.woff2')
  .pipe(inline({ name: 'Noto Sans', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans/latin-ext-bold.woff2')
  .pipe(inline({ name: 'Noto Sans', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans'));
});
// Bengali
gulp.task('notosans-bengali', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-bengali/NotoSansBengali-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Bengali', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-bengali/NotoSansBengali-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Bengali', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-bengali.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-bengali'));
});
// Hindi & Marathi
gulp.task('notosans-devanagari', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-devanagari/NotoSansDevanagari-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Devanagari', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-devanagari/NotoSansDevanagari-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Devanagari', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-devanagari.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-devanagari'));
});
// Gujarati
gulp.task('notosans-gujarati', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-gujarati/NotoSansGujarati-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Gujarati', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-gujarati/NotoSansGujarati-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Gujarati', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-gujarati.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-gujarati'));
});
// Punjabi
gulp.task('notosans-gurmukhi', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-gurmukhi/NotoSansGurmukhi-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Gurmukhi', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-gurmukhi/NotoSansGurmukhi-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Gurmukhi', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-gurmukhi.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-gurmukhi'));
});
// Kannada
gulp.task('notosans-kannada', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-kannada/NotoSansKannada-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Kannada', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-kannada/NotoSansKannada-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Kannada', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-kannada.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-kannada'));
});
// Malayalam
gulp.task('notosans-malayalam', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-malayalam/NotoSansMalayalam-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Malayalam', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-malayalam/NotoSansMalayalam-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Malayalam', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-malayalam.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-malayalam'));
});
// Oriya
gulp.task('notosans-oriya', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-oriya/NotoSansOriya-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Oriya', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-oriya/NotoSansOriya-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Oriya', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-oriya.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-oriya'));
});
// Tamil
gulp.task('notosans-tamil', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-tamil/NotoSansTamil-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Tamil', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-tamil/NotoSansTamil-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Tamil', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-tamil.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-tamil'));
});
// Telugu
gulp.task('notosans-telugu', function() {
  // create an accumulated stream
  var fontStream = merge();
  // Regular
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-telugu/NotoSansTelugu-Regular.woff2')
  .pipe(inline({ name: 'Noto Sans Tamil', style: 'normal',stretch: 'normal',weight: 400,display: 'swap', formats: ['woff2'] })));
  // Bold
  fontStream.add(gulp.src('./src/assets/styles/fonts/notosans-telugu/NotoSansTelugu-Bold.woff2')
  .pipe(inline({ name: 'Noto Sans Tamil', style: 'normal',stretch: 'normal',weight: 700,display: 'swap', formats: ['woff2'] })));
  return fontStream.pipe(concat('notosans-telugu.scss')).pipe(gulp.dest('./src/assets/styles/inlinefonts/notosans-telugu'));
});
/* Default task */
gulp.task('fonts', gulpSequence('noto-nastaliqurdu','notosans', 'notosans-bengali', 'notosans-devanagari', 'notosans-gujarati', 'notosans-gurmukhi','notosans-kannada','notosans-malayalam','notosans-oriya','notosans-tamil','notosans-telugu'));


/* Temp Folder - Copy all other files with imports appended at head*/
gulp.task('append-import', function () {
  return gulp.src(['./src/assets/styles/**/*.scss', '!./src/assets/styles/*.scss', '!./src/assets/styles/mixins/**/*.scss','!./src/assets/styles/fonts/**/*.scss'])
    .pipe(header('@import \'../mixins/mixins\';\n'))
    .pipe(header('@import \'../variables\';\n'))
    .pipe(gulp.dest('./src/assets/temp'));
});

/* Temp Folder - Copy files of level 1*/
gulp.task('copy-style', function () {
  return gulp.src(['./src/assets/styles/_variables.scss'])
    .pipe(gulp.dest('./src/assets/temp'));
});

/* Temp Folder - Copy mixins folder*/
gulp.task('copy-mixins', function () {
  return gulp.src(['./src/assets/styles/mixins/**/*'])
    .pipe(gulp.dest('./src/assets/temp/mixins'));
});

/* Temp Folder - Copy mixins folder*/
gulp.task('copy-fonts', function () {
  return gulp.src(['./src/assets/styles/inlinefonts/**/*'])
    .pipe(gulp.dest('./src/assets/temp/inlinefonts'));
});

/* Generate Components CSS files from temp folder */
gulp.task('scss-components', function () {
  return gulp.src(['./src/assets/temp/**/*.scss', '!./src/assets/temp/mixins/**/*.scss', '!./src/assets/temp/*.scss','!./src/assets/temp/fonts/**/*.scss','!./src/assets/temp/inlinefonts/**/*.scss'])
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
    .pipe(gulp.dest('./src/assets/dist/'));
});

/* Generate Main CSS files from temp folder */
gulp.task('scss-main', function () {
  return gulp.src(['./src/assets/styles/styles.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/dist/'));
});

/* Delete temp and dist folder before regenerate */
gulp.task('clean', function() {
  rimraf.sync('./src/assets/dist');
  rimraf.sync('./src/assets/temp');
});

/* Watch file changes */
gulp.task('watch', function () {
  gulp.watch('./src/assets/styles/**/*.scss', gulpSequence('clean','append-import', 'copy-style', 'copy-mixins', 'scss-components', 'scss-main'));
});

/* Default task */
gulp.task('default', gulpSequence('clean','append-import', 'copy-style', 'copy-mixins', 'scss-components', 'scss-main','watch'));