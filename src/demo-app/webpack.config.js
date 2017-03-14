const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['angular'],
    app: path.resolve(__dirname, './app/index.ts')
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../../node_modules'),
      path.resolve(__dirname, '../lib')
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
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 4000,
    hot: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
  ]
}
