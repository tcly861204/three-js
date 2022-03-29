const gulp = require('gulp');
const paths = require('./paths');
const lessTask = require('./less.task');
const stylusTask = require('./stylus.task');
const htmlTask = require('./html.task');
const cssTask = require('./css.task');
const jsTask = require('./js.task');

module.exports = function watch() {
  gulp.watch(paths.css.src, cssTask);
  gulp.watch(paths.less.src, lessTask);
  gulp.watch(paths.stylus.src, stylusTask);
  gulp.watch(paths.js.src, jsTask);
  gulp.watch(paths.html.src, htmlTask);
}
