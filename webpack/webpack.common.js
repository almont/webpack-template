'use strict';

const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [
            Path.resolve(__dirname, './polyfills'),
            Path.resolve(__dirname, '../src/scripts/index')
        ],
        about: [
            Path.resolve(__dirname, './polyfills'),
            Path.resolve(__dirname, '../src/scripts/about')
        ]
    },
    output: {
        path: Path.join(__dirname, '../dist'),
        filename: 'js/[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: Path.resolve(__dirname, '..'),
            verbose: true
        }),
        new CopyWebpackPlugin([
            { from: Path.resolve(__dirname, '../assets'), to: 'assets' }
        ]),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html',
            template: Path.resolve(__dirname, '../src/index.html')
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['about'],
            filename: 'about.html',
            template: Path.resolve(__dirname, '../src/about.html')
        })
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        path: Path.join(__dirname, '../dist'),
                        name: 'assets/[name].[ext]'
                    }
                }
            }
        ]
    }
};
