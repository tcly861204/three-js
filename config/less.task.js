const gulp = require('gulp');
const less = require('gulp-less');
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
  precss
];

module.exports = function lessTask() {
  return gulp.src(paths.less.src)
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.less.dest))
    .pipe(Browsersync.stream());  //自动刷新页面
}