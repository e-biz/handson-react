# Hand on React - Serious Webpack

## Requirements

## Instructions
Real use case of webpack, ES6 and babel.

1. Install the following dependencies: `babel-loader`, `babel-core`, `lodash` and `babel-preset-es2015`.
2. Configure your `webpack.config.js` for using babel-loader with `es2015`.
3. In your main.js file, use lodash for create a `<p><p>` for each element in the letters array (use arrow functions, ES6 style !).
4. Use the UglifyJsPlugin (it comes with webpack).
5. Install `jshint` and `jshint-loader`.
6. Use JshHint in order to test the style of your code with `esversion` properties and `camelcase`.
7. Create a custom reporter that will fail on each jshint error `this.emitError(...)`.
8. Split your code: extract `vendor` code in an other file, using `CommonsChunkPlugin` and an other entry point in `webpack.config.js`.
9. Create a npm script `build:prod` that build AND add your dist package in a zip archive.

## Expected results
ES6, lodash, Uglify, Zip, Jshint working together on your environment.

## Bonus
Do example 2.1 bonus.