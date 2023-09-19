'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sassGlob = require('gulp-sass-glob');

const paths = {
    src: './index.scss',
    dest: './css'
};

const scss = () =>
    gulp
        .src(paths.src)
        .pipe(sassGlob())
        .pipe(sass({ includePaths: ['node_modules'] }))
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed', includePaths: ['node_modules'] }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.dest));

exports.scss = scss;
exports.default = scss;

const watch = () => gulp.watch(paths.src, ['scss']);

exports.watch = watch;

gulp.task('scss', scss);
gulp.task('watch', watch);
