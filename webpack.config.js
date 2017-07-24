const webpack = require('webpack');
const path = require('path');

// module.exports = {
//   entry: {
//     "bundle": path.join(__dirname, 'src', '/app.js'),
//     "bundle.min": path.join(__dirname, 'src', '/app.js')
//   },
//   devtool: "source-map",
//   output: {
//     path: path.resolve(__dirname, './public'),
//     filename: "[name].js"
//   },
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin({
//       include: /\.min\.js$/,
//       minimize: true
//     })
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: ['babel-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.json']
//   }
// };


module.exports = {
  entry: {
    "bundle": path.join(__dirname, 'src', '/app.js'),
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "bundle.js"
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
