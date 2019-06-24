const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 8082,
    watchContentBase: true,
    open: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    //new ExtractTextPlugin("style.css"),
    //new StaticSiteGeneratorPlugin('main', data.routes, data),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      ui: false,
      server: {
        baseDir: ['dist']
      },
      files: [
        './dist/**'
      ]
    })
  ]
};