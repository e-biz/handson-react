const path = require("path");
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const version = require("./package.json").version;

module.exports = {
    entry: {
        app: ["./app/js/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: []
    },
    plugins: [
        new TransferWebpackPlugin([
            { from: 'app/root' }
        ])
    ]
};