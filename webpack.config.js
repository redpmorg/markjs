const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', '/app.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.json']
  }
};
