const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const Browsersync = require('browser-sync').create();
const rename = require('gulp-rename');
const paths = require('./paths');

module.exports = function jsTask() {
  // @ts-ignore
  return gulp.src([paths.js.src, '!./src/libs/**'])
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(Browsersync.stream());  //自动刷新页面
}