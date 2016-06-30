var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        A: ['./app/js/A.js'],
        B: ['./app/js/B.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']}}
        ]
    },
    plugins: [
        new TransferWebpackPlugin([
            {from: 'app/root'}
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            filename: "./AB-bundle.js",
            name: "AB-bundle"
        })
    ]
};