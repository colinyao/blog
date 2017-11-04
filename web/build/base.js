'use strict';
let path = require('path');
let defaultSettings = require('./defaults');
let utils = require('./utils.js');
let isProduction = process.env.NODE_ENV === 'production'

let merge = require('webpack-merge')
  // Additional npm or bower modules to include in builds
  // Add all foreign plugins you may need into this array
  // @example:
  // let npmBase = path.join(__dirname, '../node_modules');
  // let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const styleLoaders = {
  module: {
    rules: utils.styleLoaders({
      sourceMap: isProduction ? defaultSettings.build.productionSourceMap : defaultSettings.dev.cssSourceMap,
      extract: isProduction
    })
  }
}
module.exports = merge({
  entry: {
    app: ['./src/index.js'],
    vendors: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: defaultSettings.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? defaultSettings.build.assetsPublicPath : defaultSettings.dev.assetsPublicPath
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }],
      enforce: 'pre',
      include: resolve('src')
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('images/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(mp4|ogg)$/,
      loader: 'file-loader',
      options: {
        name: utils.assetsPath('video/[name].[hash:7].[ext]')
      }
    }]

  },

  resolve: {
    extensions: ['.js', '.jsx', 'json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      actions: `${resolve('src')}/actions/`,
      components: `${resolve('src')}/components/`,
      sources: `${resolve('src')}/sources/`,
      stores: `${resolve('src')}/stores/`,
      styles: `${resolve('src')}/styles/`,
      config: `${resolve('src')}/config/` + process.env.REACT_WEBPACK_ENV,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  }
}, styleLoaders);