# Hand on React - Serious Webpack

## Requirements
Example 1 is done.

## Expected results
ES6, lodash, Uglify, Zip, ESLint working together on Dev and Prod environments.

## Documentation

- [Resolve webpack](https://webpack.github.io/docs/configuration.html#resolve)
- [uglify-loader](https://www.npmjs.com/package/uglify-loader)
- [eslint-loader](https://github.com/MoOx/eslint-loader)
- [babel-loader](https://github.com/babel/babel-loader)
- [eslint](http://eslint.org/docs/user-guide/configuring)
- [node env process](https://nodejs.org/api/process.html#process_process_env)
- [commonschunkplugin](https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin)
- [lodash api](https://lodash.com/docs)

## Instructions
Real use case of webpack, ES6 and babel.

* Install the following dependencies: `babel-loader`, `babel-core`, `lodash` and `babel-preset-es2015`.
* Configure your `webpack.config.js` for using babel-loader with `es2015`.

<pre><code>
const path = require('path');

const config = {
  // ...
  module: {
    // Here, we define the different loader to use on the different type of file
    rules: [
      {
        test: /\.jsx?$/, // Specifiy the file extensions on which we want apply the loader
        exclude: /node_modules/, // Specify the directory to exclude (typically the dependencies directory)
        use: 'my-loader'
      }
    ]
  },
  //...
};
module.exports = config;
</code></pre>

* In your main.js file, use lodash for create a `<p><p>` for each element in the letters array (use arrow functions, ES6 style !).
* Install `eslint` and `eslint-loader`.
* You can specify eslint rules within the webpack.config.js file or you can create a .eslintrc.json file (which can be used by your ide)
* Tell ESLint to fail on error and on warning (`eslint-loader` options).
* Use ESLint in order to test the style of your code with `esversion` properties and `sourceType` with module (because we are in commonJS), `camelcase` rule and single `quote` rule.
* Split your code: extract `vendor` code in an other file, using `CommonsChunkPlugin` and a vendor entry point in `webpack.config.js`.
* Create a npm script `build:prod` that build AND add your dist package in a zip archive.

Second step, minify and uglify OUR source in production mode and use already minified `myExternalLib.min.js`.

* Retrieve the `NODE_ENV` environment variable, `process.env`;
* When `NODE_ENV` is set to production, create a alias for bundle `lodash` that point to it's minified version in `node_modules`, `lodash/lodash.min.js`;
* Install the `uglify-loader` as dev-dependency.
* When `NODE_ENV` is set to production, add in the list of loaders the uglify loader. BEWARE ! It MUST be add before babel loader because we only want to uglify our source. You can use `unshift`.
* When `NODE_ENV` is set to production, use the `DefinePlugin` in order to define a global variable `NODE_ENV` that contains `production` as value. Some library like React use this value in order to exclude test helpers at transpile/compile time.
* Modify the npm script `build:prod` in order to set `NODE_ENV` to `production` before the execution of the command.

## Bonus
See example2-bonus.