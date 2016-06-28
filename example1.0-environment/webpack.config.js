var path = require("path");

module.exports = {
    entry: {
        app: ["./src/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/example1/", // bundle.js can be display on http://localhost:8080/example1/bundle.js
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json" }
        ]
    }
};