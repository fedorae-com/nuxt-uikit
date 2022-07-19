const path = require('path');

module.exports = async function () {
  this.options.css.push('uikit/dist/css/uikit.css')
  
  this.addPlugin({ 
    src: path.resolve(__dirname, 'plugin.js'), 
    fileName: 'uikit.js',
    ssr: false 
  });
}

module.exports.meta = require('../package.json')