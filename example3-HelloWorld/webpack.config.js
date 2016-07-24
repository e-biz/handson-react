var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

var resolve = {alias: {}};

var plugins = [
    new TransferWebpackPlugin([{from: 'app/root'}]),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
];

var loaders = [
    {test: /\.json$/, loader: 'json'},
    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015']}}
];

if (NODE_ENV === 'production') {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(NODE_ENV) // Some library like React use this value in order to exclude test helpers
        }
    }));

    resolve = {
        alias: {
            lodash: 'lodash/lodash.min.js'
        }
    };

    loaders.splice(1, 0, {test: /\.js$/, exclude: /node_modules/, loader: 'uglify'}); // We must add this loader before babel loader because this loader is only for our source.
}

module.exports = {
    entry: {
        app: ['./app/js/main.js'],
        vendor: ['lodash']
    },
    resolve: resolve,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
        loaders: loaders,
    },
    plugins: plugins,
    eslint: {
        failOnWarning: false,
        failOnError: true,
        rules: {
            quotes: ['error', 'single'],
            camelcase: 2
        },
        parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module'
        }
    }
};