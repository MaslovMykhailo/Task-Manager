const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',
  
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: './'
  },
  
  mode: 'production',
  
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
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
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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