const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './index.ts'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'index.js',
    library: 'testAngularModule',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../../node_modules'),
    ]
  },
  module: {
    rules: [
      {
        loader: `awesome-typescript-loader?configFileName=${path.resolve(__dirname, 'tsconfig.json')}`,
        test: /\.tsx?$/
      }
    ]
  },
  externals: {
    angular: 'angular'
  }
}
