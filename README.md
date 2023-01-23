
# <font color="#FFD700	"> SUNSHARE </font>

*​A renewable energy blockchain marketplace application for a clean community.* 

<br/>

## Table of Contents

* [Installation](#installation)
    - [Node.js and NPM](#nodejs-and-npm)
    - [NVM](#nvm)
*  [Getting Started with Create React App](#getting-started-with-create-react-app)
* [Available Scripts](#available-scripts)
    - [Formatting](#formatting)
    - [Deployment](#deployment)
* [Learn More](#learn-more)

<br/>


# Installation

* ## Node.js and NPM
You can download Node.js [here](https://nodejs.org/en/download/). There are various instructions for downloading Node.js for different instances.

Additional [resource](https://phoenixnap.com/kb/install-node-js-npm-on-windows).

* ## NVM
For installing nvm you can follow instructions [here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
Before you can run the project, make sure that you have installed the following:

 1. Node.js
 2. Yarn

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

* If ever this error message appeared when you tried to *yarn  start* our project : **(react-scripts: not found
error Command failed with exit code 127)** follow these step:

    * *The dependencies might not be installed. To install them use:*

        ```
        npm install
        ```
    Try to *yarn start* again the project to see if it runs.

    If for instances it still doesn't work, try to follow the different instructions again given on the [Installation](#installation) section.





### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Formatting

Checks the formatting of code and reports any broken rules of *"Prettier"*.

```
npx prettier --check
```

Checks and fixes the formatting of the code.
```
yarn prettier --write 
```


## Deployment

Deploy the repository to projectsunshare's github pages

```
yarn deploy
```

BUG: yarn build, yarn deploy doesn't work on vscode terminal, use powershell or cmd

[reference](https://github.com/gitname/react-gh-pages)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
