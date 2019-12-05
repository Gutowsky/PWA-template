# PG Offline (Progressive Web App)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## General notes

It is recommended to use Visual Studio Code with extensions to maintain code order using linter setting stored in tsconfig.json & /.vscode/settings.json.
At start remember to use CRLF End of Line Sequence on the bottom bar of VSC.

Advisable extensions:

**[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**

**[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**

**[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)**

## Technology stack (use latest)

**[React](https://reactjs.org/)**

**[Redux](https://redux.js.org/)**

**[Typescript](https://www.npmjs.com/package/typescript)**

**[SCSS](https://sass-lang.com/guide)**

**[LocalForage](https://www.npmjs.com/package/localforage)**

**[Workbox](https://developers.google.com/web/tools/workbox)**

## UI library

  **[Material-UI]("https://material-ui.com/)** [React](https://reactjs.org/) components that implement [Google's Material Design](https://material.io/design/introduction/).

### A typical top-level directory layout

    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── public                  # HTML file to set page title and PWA files*
    ├── src                     # Source files (alternatively `lib` or `app`)
    ├── .eslintrc.json          # Linting definitions
    └── README.md

 *manifest.json and custom service worker if needed, [link](https://alligator.io/js/intro-progressive-web-apps/).

## src directory layout

    .
    ├── App                     # Main application component wrapper up
    ├── assets                  # Documentation files (alternatively `doc`)
    ├── cache                   # Source files (alternatively `lib` or `app`)
    ├── components              # Automated tests (alternatively `spec` or `tests`)
    ├── containers              # Tools and utilities
    ├── elements                # Tools and utilities
    ├── hooks                   # Tools and utilities
    ├── redux                   # Tools and utilities
    ├── shared                  # Tools and utilities
    └── README.md               # Tools and utilities

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
