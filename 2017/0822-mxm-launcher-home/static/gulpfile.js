'use strict';

let gulp = require('gulp');
let header = require('gulp-header');
let shell = require('gulp-shell');
let dataUtil = require('date-utils');

let sass = require('gulp-sass');
let autoPrefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');

let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let cssmin = require('gulp-cssmin');

let pkg = require('./package.json');

let UI_Static = /^win/.test(process.platform)? 'Z:/MXM/obt/': '/Volumes/wwwroot/MXM/obt/';

// write date
function banner () {
    let dat = new Date();
    return [
        '/* ',
        '  Project : ' + pkg.name + ' ',
        '  Author : ' + pkg.author,
        '  Update : ' + dat.toFormat('YYYY-MM-DD HH24:MI:SS'),
        '*/',
        ''
    ].join('\n');
}

// ------------------------------------------------------------------------------------------------------------
// js build
// ------------------------------------------------------------------------------------------------------------
gulp.task('copyToJs', function() {
    return gulp.src([
        'js/mxmOBTIndex.js', 'js/mxmOBTIndex.js.map',
        'js/mxmOBTIntro.js', 'js/mxmOBTIntro.js.map',
        'js/mxmOBTMasterDetail.js', 'js/mxmOBTMasterDetail.js.map',
        'js/mxmOBTMasterIndex.js', 'js/mxmOBTMasterIndex.js.map'
    ]).pipe(gulp.dest(UI_Static + '/js/'));
});


var jsDir = './js';
// ------------------------------------------------------------------------------------------------------------
// board.config.js build
// ------------------------------------------------------------------------------------------------------------
var boardEntry = './js/board.config.origin.js';
var boardOut = 'board.config.js';
var boardDevOut = 'board.config.dev.js';

gulp.task('board', function() {
    return gulp.src( boardEntry )
        .pipe( uglify() )
        .pipe( rename( boardOut ) )
        //.pipe( header( bannerDate ) )
        .pipe( gulp.dest( jsDir ) )
        .pipe( rename( boardDevOut ) )
        .pipe( gulp.dest( jsDir ) );
});
// ------------------------------------------------------------------------------------------------------------
// board.launcher.config.js build
// ------------------------------------------------------------------------------------------------------------
var boardLauncherEntry = './js/board.launcher.config.origin.js';
var boardLauncherOut = 'board.launcher.config.js';
var boardLauncherDevOut = 'board.launcher.config.dev.js';

gulp.task('boardLauncher', function() {
    return gulp.src( boardLauncherEntry )
        .pipe( uglify() )
        .pipe( rename( boardLauncherOut ) )
        //.pipe( header( bannerDate ) )
        .pipe( gulp.dest( jsDir ) )
        .pipe( rename( boardLauncherDevOut ) )
        .pipe( gulp.dest( jsDir ) );
});

// ------------------------------------------------------------------------------------------------------------
// layout.js build
// ------------------------------------------------------------------------------------------------------------
var layoutEntry = './js/layout.js';
var layoutOut = 'layout.min.js';

gulp.task('layout', function(){
    gulp.src( layoutEntry )
        .pipe( uglify() )
        //.pipe( header( bannerDate ) )
        .pipe( rename( layoutOut ) )
        .pipe( gulp.dest( jsDir ) );
});


// ------------------------------------------------------------------------------------------------------------
// sass build
// ------------------------------------------------------------------------------------------------------------
let autoprefixer_browsers = [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.0'
];

gulp.task('sass', function () {
    return gulp.src('_src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expended'}).on('error', sass.logError))
        .pipe(autoPrefixer(autoprefixer_browsers))
        .pipe(header(banner('css')))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('css/'))
        .pipe( cssmin() )
        .pipe(gulp.dest(UI_Static + '/css/'));
});

gulp.task('copyResource', function(){
    // return gulp.src(['_src/sass/**/*']).pipe(gulp.dest(UI_Static+'_src/sass/'));
});

gulp.task('copyResourceCNBJS', function(){
    return gulp.src(['js/cnb*.js']).pipe(gulp.dest(UI_Static+'js/'));
});

gulp.task('copyResourceLayoutJS', function(){
    return gulp.src(['js/layout*.js']).pipe(gulp.dest(UI_Static+'js/'));
    return gulp.src(['js/board*.js']).pipe(gulp.dest(UI_Static+'js/'));
});


// sass watch
gulp.task('sassw', function() {
    gulp.watch('_src/sass/**/*.scss', ['sass', 'copyResource']);
});

// js watch
gulp.task('jsw', function() {
    gulp.watch('js/layout.js', ['layout', 'copyResourceLayoutJS'] );
    gulp.watch('js/board*.js', ['board', 'copyResourceLayoutJS'] );
});
