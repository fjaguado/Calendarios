﻿'use strict';

var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

module.exports = function (gulp, paths) {

    gulp.task('app:debug:js', function () {
        return gulp.src(paths.debug.js.src.files)
            .pipe(gulp.dest(paths.debug.js.app.folder));
    });

    gulp.task('app:debug:scss', function () {
        return gulp.src(paths.debug.scss.src.files)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
             }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.debug.scss.app.folder));
    });

    gulp.task('app:debug:tpls', function () {
        return gulp.src(paths.debug.templates.src)
            .pipe(templateCache('app-tpls.js', { module: 'app.templates', standalone: true }))
            .pipe(gulp.dest(paths.debug.templates.app.folder));
    });

    gulp.task('app:debug:inject', function () {
        var options = {
            read: false,
            addRootSlash: false,
            relative: true
        };
        
        return gulp.src(paths.debug.index)
            .pipe(inject(
                gulp.src([paths.debug.scss.app.files]
                    .concat(paths.debug.js.app.files)
                    .concat(paths.debug.templates.app.files)),
                options)
             )
            .pipe(gulp.dest(paths.release.app.folder));
    });

    gulp.task('app:debug:copy', function () {
        // Todo improve this tasks with optimizations for the files

        //Images
        gulp.src(paths.debug.images.src)
            .pipe(gulp.dest(paths.debug.images.app));
            
        //Locale
        gulp.src(paths.debug.locale.src)
            .pipe(gulp.dest(paths.debug.locale.app));

        // Fonts
        return gulp.src(paths.debug.fonts.src)
            .pipe(gulp.dest(paths.debug.fonts.app));
    });

    gulp.task('app:release:js', function () {
        return gulp.src(paths.debug.js.app.files)
            .pipe(sourcemaps.init())
            .pipe(concat('app.min.js', { newLine: ';\r\n' }))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.release.app.folder));
    });

    gulp.task('app:release:scss', function () {
        return gulp.src(paths.debug.scss.app.files)
            .pipe(sourcemaps.init())
            .pipe(cleanCSS())
            .pipe(rename(function (path) {
                path.extname = '.min.css';
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.release.app.folder));
    });
    
    gulp.task('app:release:inject', function () {
        var options = {
            read: false,
            addRootSlash: false,
            ignorePath: 'app'
        };
        
        return gulp.src(paths.debug.index)
            .pipe(inject(
            gulp.src([paths.release.scss]
                .concat(paths.release.js)),
            options))
            .pipe(gulp.dest(paths.release.app.folder));
    });

    gulp.task('app:watch', function () {
        gulp.watch([paths.debug.js.src.files,
                    paths.debug.scss.src.files,
                    paths.debug.templates.src], ['debug']);
    });
}