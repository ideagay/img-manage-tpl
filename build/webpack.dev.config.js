const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}
module.exports = {
    entry: './src/example.js',
    output: {
        path: resolve('example'),
        filename: 'example.js'
    },
    devServer: {
        contentBase: resolve('example'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [resolve('src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html',
            inject: 'head'
        })
    ]
};