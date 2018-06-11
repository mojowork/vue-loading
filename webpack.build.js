let config = require('./webpack.config.js')

config.entry = {
  'vue-loading': './src/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'VueLoading',
  libraryTarget: 'umd'
}


module.exports = config