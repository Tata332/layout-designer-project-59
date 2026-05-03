const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

function styles() {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
}

function templates() {
  return gulp.src('./app/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build'));
}

exports.default = gulp.parallel(styles, templates);