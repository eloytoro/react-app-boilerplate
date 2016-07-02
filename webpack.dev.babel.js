var webpack = require('webpack');
var VisualizerPlugin = require('webpack-visualizer-plugin');
var config = require('./webpack.shared.babel.js');

module.exports = {
  ...config,
  devtool: 'eval',
  output: {
    ...config.output,
    publicPath: '/'
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    ...config.entry
  ],
  plugins: [
    ...config.plugins,
    new VisualizerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
