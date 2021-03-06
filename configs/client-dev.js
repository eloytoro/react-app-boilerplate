const webpack = require('webpack');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const createConfig = require('./shared');

module.exports = createConfig({
  devtool: 'eval',
  prefixes: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server'
  ],
  plugins: [
    new VisualizerPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
