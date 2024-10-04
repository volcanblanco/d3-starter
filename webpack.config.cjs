const path = require('path');

 module.exports = {
  entry: {
    index: './public/js/index.js',
  },
  mode: 'development',
  output: {
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'public/dist'),
   clean: true,
  },
 };