const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    path: path.join(__dirname, './dist'),
    libraryTarget: 'commonjs2',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  target: 'electron-renderer',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: (modulePath) => (
        modulePath.match(/node_modules/) && !modulePath.match(/node_modules\/cerebro-/)
      )
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true
        }
      }]
    }, {
      test: /\.png$/,
      use: {
        loader: 'url-loader'
      }
    }]
  }
};
