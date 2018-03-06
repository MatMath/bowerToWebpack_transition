const path = require('path');

module.exports = {
  entry: './app/app.module.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './app',
    watchContentBase: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
