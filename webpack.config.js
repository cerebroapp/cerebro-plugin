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
  externals: {
    // To minimize plugin size Cerebro writes react and react-dom to global variables
    // so it can be used in plugin code as external instead of adding it to plugin code
    "react": "React",
    "react-dom": "ReactDOM"
  },
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
