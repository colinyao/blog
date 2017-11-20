let defaultSettings=require('./defaults.js');
let path=require('path')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? defaultSettings.build.assetsSubDirectory
    : defaultSettings.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}
 var  styleLoader={
 	loader: 'style-loader',
 }
 if(options.modules){
   var cssLoader = {
     loader: 'css-loader',
     options: {
       modules:true,
       localIdentName:'[name]__[local]-[hash:base64:5]',
       minimize: process.env.NODE_ENV === 'production',
       sourceMap: options.sourceMap
     }
   }
 }else{
   var cssLoader = {
     loader: 'css-loader',
     options: {
       minimize: process.env.NODE_ENV === 'production',
       sourceMap: options.sourceMap
     }
   }
 }

 var postcssLoader={
 	loader:'postcss-loader',
      options: {
	    sourceMap: 'inline'
	 }
 }
  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [styleLoader,cssLoader,postcssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)

    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      })
    } else {
      return loaders
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  var loadersModules= exports.cssLoaders(Object.assign(options,{modules:true}))
  for (var extension in loaders) {
    var loader = loaders[extension]
    var loadersModule=loadersModules[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      exclude: path.join(__dirname, '..', 'static/css'),
      use: loadersModule
    })
    output.push({
        test: new RegExp('\\.' + extension + '$'),
        include: path.join(__dirname, '..', 'static/css'),
        use: loader
    })
    console.log(path.join(__dirname, '..', 'static/css'))

  }
//console.log(JSON.stringify(output))

  return output
}
