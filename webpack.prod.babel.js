var webpack = require('webpack');
var config = require('./webpack.shared.babel.js');

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    new webpack.optimize.UglifyJsPlugin({compress: {warnings:false}})
  ]
};
