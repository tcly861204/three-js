const gulp = require('gulp');
const paths = require('./paths');
module.exports = function copyTask() {
  return gulp.src(paths.assets.src)
  .pipe(gulp.dest(paths.assets.dest));
}