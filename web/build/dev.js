'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
  // Add needed plugins here
  // add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(function(name) {
  baseConfig.entry[name] = ['./build/dev-client'].concat(baseConfig.entry[name])
})

let config = merge(baseConfig, {
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': defaultSettings.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot-loader!babel-loader',
  include: [].concat(
    [path.join(__dirname, '/../src')]
  )
});

module.exports = config;