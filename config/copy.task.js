const gulp = require('gulp');
const paths = require('./paths');
module.exports = function copyTask() {
  return gulp.src(paths.asserts.src)
  .pipe(gulp.dest(paths.asserts.dest));
}