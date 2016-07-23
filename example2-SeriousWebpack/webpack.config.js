var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var NODE_ENV = 'dev';

if (NODE_ENV === 'production') {
    // Do some cool stuff like uglify, minify...
}

module.exports = {
    entry: {
        app: ['./app/js/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json'}
        ]
    },
    plugins: [
        new TransferWebpackPlugin([
            {from: 'app/root'}
        ])
    ]
};