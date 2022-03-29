const del = require('del');
module.exports = function cleanTask() {
  return del([ 'dist' ]);
}