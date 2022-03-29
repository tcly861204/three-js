module.exports = {
  js: {
    src: ['src/**/*.js', '!./src/assets/**'],
    dest: './dist'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: './dist/assets'
  },
  css: {
    src: ['src/**/*.css', '!./src/assets/**'],
    dest: './dist'
  },
  stylus: {
    src: ['src/**/*.styl', '!./src/assets/**'],
    dest: './dist'
  },
  less: {
    src: ['src/**/*.less', '!./src/assets/**'],
    dest: './dist'
  },
  imgs: {
    src: ['src/**/*.jpg', 'src/**/*.png'],
    dest: './dist'
  },
  html: {
    src: 'src/**/*.html',
    dest: './dist'
  }
}