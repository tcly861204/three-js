const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const paths = require('./paths');
const Browsersync = require('browser-sync').create();
const postcss = require('gulp-postcss');

const processors = [
  autoprefixer,
  cssnext,
  precss];

module.exports = function cssTask() {
  return gulp.src(paths.css.src)
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(Browsersync.stream());  //自动刷新页面
}