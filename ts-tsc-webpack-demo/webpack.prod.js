const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	output: {
		filename: "[name].bundle.min.js",
		chunkFilename: "[name].chunk.min.js"
	}
});