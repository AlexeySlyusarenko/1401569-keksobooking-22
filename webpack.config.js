const path = require('path');

module.exports = {
  entry: './source/js/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.budle.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};