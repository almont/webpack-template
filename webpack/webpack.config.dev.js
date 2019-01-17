'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require('webpack');
const Path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: Path.join(__dirname, '../dist'),
    inline: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s[c|a]ss$/,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      }
    ]
  }
});