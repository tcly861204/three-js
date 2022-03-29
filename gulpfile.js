const gulp = require('gulp');
const cssTask = require('./config/css.task');
const stylusTask = require('./config/stylus.task');
const htmlTask = require('./config/html.task');
const cleanTask = require('./config/clean.task');
const lessTask = require('./config/less.task');
const serve = require('./config/serve');
const imageTask = require('./config/image.task');
const jsTask = require('./config/js.task');
const watch = require('./config/watch');
const copyTask = require('./config/copy.task');
// 开发
gulp.task('dev', gulp.series(
  cleanTask,
  // @ts-ignore
  gulp.parallel(imageTask, copyTask, cssTask, lessTask, stylusTask, jsTask, htmlTask, watch, serve)));


// 构建
gulp.task('build', gulp.series(
  cleanTask,
  // @ts-ignore
  gulp.parallel(imageTask, copyTask, cssTask, lessTask, stylusTask, jsTask, htmlTask)));