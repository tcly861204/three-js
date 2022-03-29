const gulp = require('gulp');
const rev = require('gulp-rev-append');
const htmlmin = require('gulp-htmlmin');
const Browsersync = require('browser-sync').create();
const paths = require('./paths');

module.exports = function htmlTask() {
  return gulp.src(paths.html.src)
  .pipe(rev())
  .pipe(htmlmin({
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyCSS: true //压缩页面CSS
  }))
  .pipe(gulp.dest(paths.html.dest))
  .pipe(Browsersync.stream());  //自动刷新页面
}