const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const header = require('gulp-header');
const gulpSequence = require('gulp-sequence');
const rimraf = require('rimraf');
const inline = require('gulp-inline-fonts');
const concat = require('gulp-concat');
const merge = require('merge-stream');
const replace = require('gulp-string-replace');
const concatCss = require('gulp-concat-css');
path = require('path');

const basepath = './src/assets/styles/';
const fontspath = basepath + 'fonts/';
const infontspath = basepath + 'inlinefonts/';
const temppath = './src/assets/temp/';
const repopath = './src/assets/sb-repo/';
replaceBeforeRegex = /^(.*)\/\*\!Delete\ before\ this\*\//mi;

/*========================
      Inline Fonts 
==========================*/
// Urdu
gulp.task('noto-nastaliqurdu', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'noto-nastaliqurdu/NotoNastaliqUrdu-Regular.woff')
        .pipe(inline({ name: 'Noto Nastaliq Urdu', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff'] })));
    return fontStream.pipe(concat('noto-nastaliqurdu.scss')).pipe(gulp.dest(infontspath + 'noto-nastaliqurdu'));
});

// English
gulp.task('notosans', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans/latin-ext.woff2')
        .pipe(inline({ name: 'Noto Sans', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans/latin-ext-bold.woff2')
        .pipe(inline({ name: 'Noto Sans', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans.scss')).pipe(gulp.dest(infontspath + 'notosans'));
});

// Bengali
gulp.task('notosans-bengali', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-bengali/NotoSansBengali-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Bengali', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-bengali/NotoSansBengali-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Bengali', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-bengali.scss')).pipe(gulp.dest(infontspath + 'notosans-bengali'));
});

// Hindi & Marathi
gulp.task('notosans-devanagari', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-devanagari/NotoSansDevanagari-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Devanagari', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-devanagari/NotoSansDevanagari-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Devanagari', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-devanagari.scss')).pipe(gulp.dest(infontspath + 'notosans-devanagari'));
});

// Gujarati
gulp.task('notosans-gujarati', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-gujarati/NotoSansGujarati-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Gujarati', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-gujarati/NotoSansGujarati-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Gujarati', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-gujarati.scss')).pipe(gulp.dest(infontspath + 'notosans-gujarati'));
});

// Punjabi
gulp.task('notosans-gurmukhi', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-gurmukhi/NotoSansGurmukhi-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Gurmukhi', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-gurmukhi/NotoSansGurmukhi-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Gurmukhi', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-gurmukhi.scss')).pipe(gulp.dest(infontspath + 'notosans-gurmukhi'));
});

// Kannada
gulp.task('notosans-kannada', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-kannada/NotoSansKannada-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Kannada', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-kannada/NotoSansKannada-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Kannada', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-kannada.scss')).pipe(gulp.dest(infontspath + 'notosans-kannada'));
});

// Malayalam
gulp.task('notosans-malayalam', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-malayalam/NotoSansMalayalam-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Malayalam', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-malayalam/NotoSansMalayalam-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Malayalam', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-malayalam.scss')).pipe(gulp.dest(infontspath + 'notosans-malayalam'));
});

// Oriya
gulp.task('notosans-oriya', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-oriya/NotoSansOriya-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Oriya', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-oriya/NotoSansOriya-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Oriya', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-oriya.scss')).pipe(gulp.dest(infontspath + 'notosans-oriya'));
});

// Tamil
gulp.task('notosans-tamil', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-tamil/NotoSansTamil-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Tamil', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-tamil/NotoSansTamil-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Tamil', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-tamil.scss')).pipe(gulp.dest(infontspath + 'notosans-tamil'));
});

// Telugu
gulp.task('notosans-telugu', function() {
    var fontStream = merge();
    // Regular
    fontStream.add(gulp.src(fontspath + 'notosans-telugu/NotoSansTelugu-Regular.woff2')
        .pipe(inline({ name: 'Noto Sans Telugu', style: 'normal', stretch: 'normal', weight: 400, display: 'swap', formats: ['woff2'] })));
    // Bold
    fontStream.add(gulp.src(fontspath + 'notosans-telugu/NotoSansTelugu-Bold.woff2')
        .pipe(inline({ name: 'Noto Sans Telugu', style: 'normal', stretch: 'normal', weight: 700, display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('notosans-telugu.scss')).pipe(gulp.dest(infontspath + 'notosans-telugu'));
});

// SB Icons
gulp.task('sb-icons', function() {
    var fontStream = merge();
    fontStream.add(gulp.src(fontspath + 'sb-icons/icomoon.woff')
        .pipe(inline({ name: 'icomoon', style: 'normal', stretch: 'normal', weight: 'normal', display: 'swap', formats: ['woff'] })));
    return fontStream.pipe(concat('sb-icons.scss')).pipe(gulp.dest(infontspath + 'sb-icons'));
});

// Semantic Icons
gulp.task('semantic-icons', function() {
    var fontStream = merge();
    fontStream.add(gulp.src(fontspath + 'semantic-icons/icons.woff2')
        .pipe(inline({ name: 'Icons', style: 'normal', stretch: 'normal', weight: 'normal', display: 'swap', formats: ['woff2'] })));
    return fontStream.pipe(concat('semantic-icons.scss')).pipe(gulp.dest(infontspath + 'semantic-icons'));
});

// Generate all fonts inline scss
gulp.task('fonts', gulpSequence('noto-nastaliqurdu', 'notosans', 'notosans-bengali', 'notosans-devanagari', 'notosans-gujarati', 'notosans-gurmukhi', 'notosans-kannada', 'notosans-malayalam', 'notosans-oriya', 'notosans-tamil', 'notosans-telugu', 'sb-icons', 'semantic-icons'));

/*========================
  Fonts CSS generate
==========================*/
/* Generate Fonts CSS files */
gulp.task('fonts-css', function() {
    return gulp.src([infontspath + '**/*.scss', '!' + infontspath + 'fonts.scss'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(repopath + 'fonts'));
});

/* Generate Concated Fonts CSS files */
gulp.task('fonts-concated', function() {
    return gulp.src([infontspath + 'fonts.scss'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(repopath));
});

/*========================
  Main CSS file generation
==========================*/
/* Generate Main CSS files from styles folder */
gulp.task('scss-main', function() {
    return gulp.src([basepath + 'styles.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(repopath));
});

/*========================
  Generate Variables file
==========================*/
gulp.task('scss-variables', function() {
    return gulp.src([basepath + '_variables.scss'])
        .pipe(rename(function(path) { //since sass() wont compile _partials files we are removing it here
            path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
        }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename(function(file) {
            const parentFolder = path.dirname(file.dirname);
            file.dirname = path.join(parentFolder, ''); //generated file extension
        }))
        .pipe(gulp.dest(repopath));
});
/*========================
  Generate Base file
==========================*/
gulp.task('scss-base', function() {
    return gulp.src([basepath + 'base/base.scss'])
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(gulp.dest(repopath));
});
/*========================
  Generate Layout file
==========================*/
gulp.task('scss-layout', function() {
    return gulp.src([basepath + 'layout/layout.scss'])
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(gulp.dest(repopath));
});
/*========================
  Generate Pages file
==========================*/
// Individual
gulp.task('scss-pages', function() {
    return gulp.src([basepath + 'pages/*.scss','!' + basepath + 'pages/pages.scss'])
        .pipe(rename(function(path) { //since sass() wont compile _partials files we are removing it here
            path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
        }))
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(rename(function(file) {
            const parentFolder = path.dirname(file.dirname);
            file.dirname = path.join(parentFolder, 'pages'); //generated file extension
        }))
        .pipe(gulp.dest(repopath));
});
// Concated
gulp.task('scss-pages-concated', function() {
    return gulp.src([basepath + 'pages/pages.scss'])
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(gulp.dest(repopath));
});
/*========================
  Generate vendors file
==========================*/
// Individual
gulp.task('scss-vendors', function() {
    return gulp.src([basepath + 'vendors/*.scss','!' + basepath + 'vendors/vendors.scss'])
        .pipe(rename(function(path) { //since sass() wont compile _partials files we are removing it here
            path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
        }))
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(rename(function(file) {
            const parentFolder = path.dirname(file.dirname);
            file.dirname = path.join(parentFolder, 'vendors'); //generated file extension
        }))
        .pipe(gulp.dest(repopath));
});
// Concated
gulp.task('scss-vendors-concated', function() {
    return gulp.src([basepath + 'vendors/vendors.scss'])
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(gulp.dest(repopath));
});
/*========================
  Generate Common file
==========================*/
gulp.task('scss-common', function() {
    return gulp.src([repopath + 'base.css', repopath + 'layout.css'])
        .pipe(concatCss("common.css"))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(repopath));
});
/*========================
  Component CSS Generation
==========================*/
/* Temp Folder - Copy all other files with imports appended at head*/
gulp.task('append-import', function() {
    return gulp.src([basepath + '**/*.scss', '!' + basepath + '*.scss', '!' + basepath + 'mixins/**/*.scss','!' + basepath + 'fonts/**/*.scss', '!' + basepath + 'inlinefonts/**/*.scss'])
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(gulp.dest(temppath));
});

/* Temp Folder - Copy files of level 1*/
gulp.task('copy-style', function() {
    return gulp.src([basepath + '_variables.scss'])
        .pipe(gulp.dest(temppath));
});

/* Temp Folder - Copy mixins folder*/
gulp.task('copy-mixins', function() {
    return gulp.src([basepath + 'mixins/**/*'])
        .pipe(gulp.dest(temppath + 'mixins'));
});

/* Temp Folder - Copy mixins folder*/
gulp.task('copy-fonts', function() {
    return gulp.src([basepath + 'inlinefonts/**/*'])
        .pipe(gulp.dest(temppath + 'inlinefonts'));
});

/* Generate Components CSS files from temp folder */
gulp.task('scss-components', function() {
    return gulp.src([temppath + 'components/*.scss', '!' + temppath + 'components/components.scss'])
        .pipe(rename(function(path) { //since sass() wont compile _partials files we are removing it here
            path.basename = path.basename[0] == '_' ? path.basename.substr(1) : path.basename
        }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(rename(function(file) {
            const parentFolder = path.dirname(file.dirname);
            file.dirname = path.join(parentFolder, 'components'); //generated file extension
        }))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(gulp.dest(repopath));
});

/* Generate Concated Components CSS files from temp folder */
gulp.task('scss-components-concated', function() {
    return gulp.src([basepath + 'components/components.scss'])
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(gulp.dest(repopath));
});

/*========================
  Generate Semantic file
==========================*/
gulp.task('scss-semantic', function() {
    return gulp.src([basepath + 'semantic/semantic-merged.scss'])
        .pipe(header('/*!Delete before this*/'))
        .pipe(header('@import \'../mixins/mixins\';\n'))
        .pipe(header('@import \'../variables\';\n'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(replace(replaceBeforeRegex, ''))
        .pipe(gulp.dest(repopath));
});

/*========================
    Cleanup
==========================*/
/* Delete temp and dist folder before regenerate */
gulp.task('clean', function() {
    rimraf.sync(repopath);
    rimraf.sync(temppath);
});

/*========================
    Watcher
==========================*/
/* Sequence of tasks*/
gulp.task('sequence', function(callback) {gulpSequence('clean', 'append-import', 'fonts-css', 'fonts-concated', 'copy-style', 'scss-variables', 'copy-mixins', 'scss-components', 'scss-components-concated', 'scss-semantic', 'scss-base', 'scss-layout', 'scss-common','scss-pages','scss-pages-concated','scss-vendors','scss-vendors-concated', 'scss-main')(callback)});
/* Watch file changes */
gulp.task('watch', function() {
    gulp.watch(basepath + '**/*.scss', ['sequence']);
});

/* Default task */
gulp.task('default', ['sequence','watch']);