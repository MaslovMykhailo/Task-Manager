const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  
  devtool: 'cheap-eval-source-map',
  
  mode: 'development',
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Task Manager Dev',
      template: './src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      favicon: './src/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: './'
  },
  
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'errors-only',
    publicPath: '/',
    contentBase: path.join(__dirname, '/dist/'),
    hot: true
  },
  
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