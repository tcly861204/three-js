const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const paths = require('./paths');

module.exports = function imageTask() {
  return gulp.src(paths.imgs.src)
    .pipe(imageMin())
    .pipe(gulp.dest(paths.imgs.dest));
}
