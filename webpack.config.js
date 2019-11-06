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
                    presets: ["@babel/preset-env", "@babel/preset-react"],

                    // This is optional, but allows Babel to transpile class properties.
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        ]
    }
};
