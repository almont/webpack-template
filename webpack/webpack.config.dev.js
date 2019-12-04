'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Webpack = require('webpack');
const Path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: Path.join(__dirname, '../dist'),
        port: 5050,
        compress: true,
        inline: true,
        hot: true
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
                exclude: /(node_modules|bower_components)/,
                include: Path.resolve(__dirname, '../src'),
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader?sourceMap=true',
                    'sass-loader'
                ]
            }
        ]
    }
});
