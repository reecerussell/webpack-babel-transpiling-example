# Webpack & Babel

A brief and basic example on using Webpack and Babel to transpile modern JavaScript to more browser-friendly ES5 JavaScript.

### Here's how to do it:

1. Create a new directory, then open a command-line inside.
2. Inside the new directory, initialise NPM by running: 
```
npm init -y
```

3. To be able to use Webpack and Babel, we need to install them as dev dependencies. Back in the command-line, to install Webpack and Babel run: 
```
npm i webpack webpack-cli babel-loader @babel/preset-env @babel/core -D
```

4. In the root of your project (in your new directory), create a new file called ```webpack.config.js```.
2. Open your ```webpack.config.js```, and do something like this: 
```javascript
const path = require("path");

module.exports = {
    entry: "./src/index.js", // This is your entrypoint file.
    mode: "production",
    output: {
        filename: "index.js", // The name of your output file.
        path: path.resolve(__dirname, "dist"), // The output directory.
        
        // This field is only really needed when you're consuming your
        // package in ES6/7.
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/, // This targets all files with the .js extension.
                exclude: /node_modules/, // Ignore the node_modules directory.
                loader: "babel-loader", // This specifies that we want to use babel.
                
                // Loader options for the babel-loader.
                options: {
                    // Presets tell Babel how to transpile your code.
                    presets: ["@babel/preset-env"],

                    // This is optional, but allows Babel to transpile class properties.
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        ]
    }
};
```
6. Next we need to add a script to run Webpack. To do this you need to ammend your ```package.json``` file. In the root of the JSON, there should be a "scripts" object - if there isn't, you'll need to create one. In the "scripts" object, add a new string called "webpack" (this can be called anything), and set the value to "webpack". For example:
```json
{
    "scripts": {
        "webpack": "webpack"
    }
}
```
7. Now your Webpack configuration is setup, now create two directories in your root (newly created directory), one called "src" and the other called "dist".
8. Inside your src directory create a new file called index.js, and do something like this:
```javascript
class MyClass {
    constructor() {
        this._prefix = "MyClass:";
    }

    Print = text => {
        console.log(`${this._prefix} ${text}`);
    };
}

export default MyClass;
```
9. All that's left to do is run Webpack. Open your command-line in your directory, then run: 
```
npm run webpack
```
Once complete, there should be a new file in your dist directory with your transpilled code.

## React
---

So how can you use React with your new setup? There are two simple steps:

1. Open up a command-line for the project directory, then run: 
```
npm i react @babel/preset-react -D
```
2. Then, add the new preset to the webpack configuration like so:
```javascript
{
    test: /\.js$/, // This targets all files with the .js extension.
    exclude: /node_modules/, // Ignore the node_modules directory.
    loader: "babel-loader", // This specifies that we want to use babel.
    
    // Loader options for the babel-loader.
    options: {
        // Presets tell Babel how to transpile your code.
        presets: ["@babel/preset-env", "@babel/preset-react"],

        // This is optional, but allows Babel to transpile class properties.
        plugins: ["@babel/plugin-proposal-class-properties"]
    }
}
```

That's it. Now you can use JSX and React in your classes. For example:

```javascript
import React from "react";

class MyClass {
    constructor() {
        this._prefix = "MyClass:";
    }

    Print = text => {
        console.log(`${this._prefix} ${text}`);

        return (
            <p>
                {this._prefix} {text}
            </p>
        );
    };
}

export default MyClass;
```

### Info
---

**Last updated:** 6th November 2019

**By:** Reece Russell 
