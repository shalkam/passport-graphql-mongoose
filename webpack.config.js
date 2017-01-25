var webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './dist',
    filename: 'index.js',
    library: 'passport-local-mongoose',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: { loaders: [] },
  plugins: [ new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }) ]
};
