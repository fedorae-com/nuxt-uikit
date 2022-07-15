const path = require('path');

module.exports = async function () {
  this.addPlugin({ 
    src: path.resolve(__dirname, 'plugin.js'), 
    fileName: 'uikit.js',
    ssr: false 
  });
}