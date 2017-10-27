var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './js/main.js',
  output: {
//    path: path.resolve(__dirname, './dist'),
//    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
//      {
//        test: /\.(png|jpg|gif|svg)$/,
//        loader: 'file-loader',
//        options: {
//          name: '[name].[ext]?[hash]'
//        }
//      },
//      {
//        test: /\.css$/,
//        use: ExtractTextPlugin.extract({
//          fallback: "style-loader",
//          use: "css-loader"
//        })
//      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}