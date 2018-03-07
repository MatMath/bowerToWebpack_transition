# Training on Webpack 4 for upgrading old projects.

## Overview
Training on this small application to move it from Bower & Angular1 to npm & Webpack4 before I do the same in the massive work project.

## Step took:
- Take a Really Deep Breath...
- Add lowdash to the build to represent a dependency that cannot be move to npm yet (custom module) via Bower.
- Install webpack & webpack-cli & add the basic configuration file.
- Break everything
- Move the Bower dependency to a NPM/Package.js dependency.
- Converting the module from src to import.
- Add webpack-dev-server to serve / follow the progress.
- Modify the Index.html to load the bundle instead of all dependency.
- Update the app.module.js to use Import structure.

## Big challenge:
- Fighting on why sometime "export {}" and sometime "module.exports = {}" works.
- Trying to keep as much as the initial structure as possible.

## Ressources
Webpack 2 & 3.
Good video to get started with Webpack and How Import/export works: https://egghead.io/lessons/angularjs-angular-with-webpack-requiring-directives
https://github.com/preboot/angularjs-webpack/blob/master/webpack.config.js
http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
