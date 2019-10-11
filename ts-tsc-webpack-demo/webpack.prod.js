var path = require("path")
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'production', 
    devtool: 'cheap-module-source-map',
   output: {
        path: path.resolve(__dirname, 'html/js_wp'),
        filename: "[name].bundle.min.js",
        chunkFilename: "[name].chunk.min.js"
    }
});
