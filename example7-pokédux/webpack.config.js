var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

var resolve = {alias: {
    bulma: 'bulma/css/bulma.css'
}};

var plugins = [
    new TransferWebpackPlugin([{from: 'app/root'}]),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
];

var loaders = [
    {test: /\.json$/, loader: 'json'},
    {test: /\.css$/, loader: "style-loader!css-loader"},
    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}}
];

if (NODE_ENV === 'production') {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(NODE_ENV) // Some library like React use this value in order to exclude test helpers
        }
    }));

    resolve = {
        alias: {
            lodash: 'lodash/lodash.min.js',
            react: 'react/dist/react.min.js',
            'react-dom': 'react-dom/dist/react-dom.min.js',
            bulma: 'bulma/css/bulma.css',
            redux: 'redux/dist/redux.min.js'
        }
    };

    loaders.splice(1, 0, {test: /\.js$/, exclude: /node_modules/, loader: 'uglify'}); // We must add this loader before babel loader because this loader is only for our source.
}

module.exports = {
    entry: {
        app: ['./app/js/main.js'],
        vendor: ['lodash', 'react', 'react-dom', 'bulma']
    },
    resolve: resolve,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}
        ],
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
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true
            },
            plugins: ["react"],
            extends: ["eslint:recommended", "plugin:react/recommended"]
        }
    }
};