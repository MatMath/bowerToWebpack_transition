const path = require('path');

module.exports = {
  entry: './app/app.module.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
