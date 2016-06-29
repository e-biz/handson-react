# Hand on React - environment

## Requirements
- None

## Instructions
Install a working web developer environment with npm scripts, npm dependencies and webpack.

1. Download and install [NodeJs](https://nodejs.org/en/download/current/).
2. Extract your node package where you want.
3. Add the /where/you/want/node-v[version]-linux-x64/bin to your $PATH.
4. Install the following npm dependencies as dev-dependencies: `webpack-dev-server`, `json-loader`, `transfer-webpack-plugin` and `webpack`.
5. Create a webpack.config.js with entry point `src/js/main.js` and output `bundle.js`, use the `json-loader` module and the `transfer-webpack-plugin` plugin.
5. Launch the http server `webpack-dev-server` and specify to serve the directory `app/root/`.
6. Create an npm script in order to launch with a short command line the server.
7. Create an npm script in order to build with a short command line the project.

## Expected results
With this environment you are able manage npm dependencies and launch an internal HTTP server in order to test your changes.

## Bonus
Going further, ship with your code the version of the application and display it in the console of the app and in your web page.