/* eslint-disable prettier/prettier */
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// //const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// module.exports = {
//     entry: './src/index.js',
//     mode: 'development', //'production',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         clean: true,
//     },
//     plugins: [
//         //new MiniCssExtractPlugin(),
//         new HtmlWebpackPlugin({
//             template: './index.html',
//         }),
//     ],
//     module: {
//         rules: [
//             { test: /\.css$/, use: ['style-loader', 'css-loader'] },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 type: 'asset/resource',
//             },
//             {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/i,
//                 type: 'asset/resource',
//             },
//             { test: /\.(js)$/, use: 'babel-loader' },
//         ],
//     },
// }

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    entry: './src/index.js',
    mode,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
}
