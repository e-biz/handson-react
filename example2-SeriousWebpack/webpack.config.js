const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const NODE_ENV = 'dev'; // we set the variable (Maybe we will need to get a env var with process.env.ENV_VAR)

// Here, we define the rules use in modules
const rules = [];
// Here, we define the pluggings to use
const plugins = [];

if (NODE_ENV === 'production') {
    // Do some cool stuff like uglify, minify...
    // We might want to play with rules or plugins
}

module.exports = {
    // Entry point of you app
    entry: {
        app: ['./app/js/main.js']
    },
    // Output of webpack
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Bundle name
    },
    // Here, we define the different loader to use on the different type of file
    module: {
        rules // This is an ES6 way to write "rules: rules"
    },
    // Here, we specify the pluggins we want to apply
    plugins
};