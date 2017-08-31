const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    "bundle": path.join(__dirname, 'src', '/app.js')
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, './public'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      APP_NAME: JSON.stringify("MarkJS"),
      VERSION: JSON.stringify("alpha_1_git_commit"),
      BROWSER_SUPPORTS_HTML5: true,
      "typeof window": JSON.stringify("object")
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(
    //     process.env.NODE_ENV || 'development'
    //   )
    // }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.json'],
  }
};
