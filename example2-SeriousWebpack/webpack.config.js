const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

let resolve = {alias: {}};

const plugins = [
    new TransferWebpackPlugin([{from: 'app/root'}]),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity
    })
];

const rules = [
    {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [{
            loader :'eslint-loader',
            options: {
                failOnWarning: false,
                failOnError: true
            }
        }]
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
        }]
    }
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
    
    // We must add this loader before babel loader because this loader is only for our source.
    rules.unshift({
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['uglify-loader']
    });
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
    plugins: plugins
};