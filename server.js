require('babel-register');
var config = require('./webpack.dev.babel.js');
var DevServer = require('webpack-dev-server');
var webpack = require('webpack');

new DevServer(webpack(config), {
  publicPath: '/',
  hot: true,
  stats: {
    colors: true,
    chunkModules: false
  }
}).listen(8080, 'localhost', () => {
  console.log('[webpack-dev-server]', 'Listening at port 8080');
});
