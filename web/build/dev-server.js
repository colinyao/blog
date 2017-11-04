// /*eslint no-console:0 */
// 'use strict';
// require('core-js/fn/object/assign');
// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig=require('./dev.js')
// const defaultConfig = require('./defaults.js');


// /**
//  * Flag indicating whether webpack compiled for the first time.
//  * @type {boolean}
//  */
// let isInitialCompilation = true;

// const compiler = webpack(webpackConfig);
// console.log(webpackConfig)
// new WebpackDevServer(compiler, webpackConfig.devServer)
// .listen(defaultConfig.dev.port, 'localhost', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Listening at localhost:' + defaultConfig.dev.port);
// });

// compiler.plugin('done', () => {
//   if (isInitialCompilation) {
//     // Ensures that we log after webpack printed its stats (is there a better way?)
//     setTimeout(() => {
//       console.log('\n✓ The bundle is now ready for serving!\n');
//       console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + defaultConfig.dev.port + '/webpack-dev-server/');
//       console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + defaultConfig.dev.port + '/\n');
//       console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
//     }, 350);
//   }
//   isInitialCompilation = false;
// });

require('./check-versions')()

var config = require('./defaults')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./dev')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it

  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
