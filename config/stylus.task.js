const gulp = require('gulp');
const stylus = require('gulp-stylus');
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

module.exports = function stylusTask() {
  return gulp.src(paths.stylus.src)
    .pipe(stylus({
      linenos: true,
      compress: false
    }))
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.stylus.dest))
    .pipe(Browsersync.stream());
}