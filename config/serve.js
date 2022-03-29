const Browsersync = require('browser-sync').create();
module.exports = function serve() {
  return Browsersync.init({
    // @ts-ignore
    open: 'localhost:3000', //用局域网ip打开
    server: {
      baseDir: './dist/',
      index:'./index.html',
      directory: true
    },
    port: 3000
  });
}