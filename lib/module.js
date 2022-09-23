const path = require('path')

module.exports = function () {
  this.options.css.push('uikit/dist/css/uikit.css')

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'uikit.js',
    ssr: this.options.ssr
  })
}

module.exports.meta = require('../package.json')
