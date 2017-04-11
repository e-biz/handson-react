var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

var resolve = {alias: {}};

var plugins = [
    new TransferWebpackPlugin([{from: 'app/root'}]),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
];

var rules = [
    {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['eslint-loader'],
        options: {
            failOnWarning: false,
            failOnError: true
        }
    },
    {test: /\.js$/, exclude: /node_modules/, use: [{loader: 'babel-loader', options: {presets: ['es2015']}}]}
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

    rules.unshift({test: /\.js$/, exclude: /node_modules/, use: ['uglify-loader']}); // We must add this loader before babel loader because this loader is only for our source.
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
        rules
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