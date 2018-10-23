const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
  entry: './src/js/index.js',
  
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.[hash].js',
    publicPath: './'
  },
  
  mode: 'production',
  
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new HtmlWebpackPlugin({
      title: 'Task Manager Dev',
      template: './src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img/',
              name: '[name].[ext]',
              publicPath: './img/'
            }
          }
        ]
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }]
  },
};