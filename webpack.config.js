const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/app.module.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './app',
    watchContentBase: true
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
