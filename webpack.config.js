module.exports = {
    entry: "./js/main.js",
    output: {
        publicPath: "/dist/",
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
        ]
    }
};
