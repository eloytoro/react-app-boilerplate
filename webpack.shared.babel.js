var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VisualizerPlugin = require('webpack-visualizer-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[local]-[hash:base64:6]!postcss'
    }]
  },
  postcss: [
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
    require('precss')
  ]
};
