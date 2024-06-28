# RMTDev

## Overview

RMTDev is a job search application that allows users to search for jobs using keywords (such as JavaScript, Python) and bookmark their preferred jobs. The application leverages state management for an efficient and seamless user experience.

## Branches

### Main Branch
The `main` branch contains the code deployed using GitHub. This is the production-ready version of the application.

### Webpack Branch
The `webpack` branch explores the usage of Webpack for optimizing the application's build process.

## What is Webpack?
Webpack is a module bundler that bundles files into a single file. It performs various optimizations to improve the application's performance.

### Key Features of Webpack in This Project

1. **Development to Production Optimization**:
   - By changing the mode from development to production in `webpack.config.js`, Webpack optimizes the code and creates a `main.js` file in the `dist` folder.

2. **Babel Integration**:
   - Added `babel.config.js` and ran `npx webpack` to use Babel.
   - Babel is configured to support browsers with ">0.2%" global usage.
   - Transforms modern JavaScript (such as arrow functions) to be compatible with older browsers.

3. **CSS Management**:
   - CSS files can be imported directly in Webpack (e.g., `index.css`).

### NPM Packages Used
- `webpack`: Module bundler.
- `babel`: JavaScript compiler.
- `core-js`: Modular standard library for JavaScript.
- `postcss-loader`: Loader for Webpack to process CSS with PostCSS.
- `cssnano`: CSS optimizer.
- `postcss-pxtorem`: Convert pixel units to rem units using PostCSS.
- `autoprefixer`: Parse CSS and add vendor prefixes to CSS rules using values from "Can I Use".
