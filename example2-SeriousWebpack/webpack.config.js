var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./app/js/main.js'],
        vendor: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "jshint-loader"}
        ],
        loaders: [
            {test: /\.json$/, loader: 'json'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']}}
        ]
    },
    plugins: [
        new TransferWebpackPlugin([
            {from: 'app/root'}
        ]),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
    ],
    jshint: {
        esversion: 6,
        camelcase: true,
        reporter: function (errors) {
            for (i = 0; i < errors.length; i++) {
                this.emitError(errors[i].reason);
            }
        }
    }
};