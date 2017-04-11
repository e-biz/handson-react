# Handson React - environment

## Requirements
- None

## Instructions
Install a working web developer environment with npm scripts, npm dependencies and webpack.

1. Download and install [NodeJs](https://nodejs.org/en/download/current/).
2. Extract your node package where you want.
3. Add the /where/you/want/node-v[version]-linux-x64/bin to your $PATH.
4. Install the following npm dependencies as dev-dependencies: `webpack-dev-server`, `transfer-webpack-plugin` and `webpack`.

**webpack-dev-server** is used to have a server which will reload your build cycle on file change  
**json-loader** is a module which will load your json files into javascript assets  
**transfer-webpack-plugin** is a plugin which will copy any folder into a target folder

5. Create a webpack.config.js with entry point `app/js/main.js` and output `bundle.js`. Declare the `transfer-webpack-plugin` plugin.
6. Launch the http server `webpack-dev-server` and specify to serve the directory `app/root/`.
7. Create an npm script in order to launch with a short command line the server. (npm run-script serve)
8. Create an npm script in order to build with a short command line the project. (npm run-script build)

## Expected results
With this environment you are able manage npm dependencies and launch an internal HTTP server in order to test your changes.

## Bonus
Going further, ship with your code the version of the application and display it in the console of the app and in your web page.
