module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "dist/js/medium-editor.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
