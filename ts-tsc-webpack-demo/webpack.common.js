// webpack.common.js 公用的配置文件

const path = require('path');
module.exports = { 
    entry: {
        index: "./ts/main.ts",
        test: "./ts/test.ts"
    },
    output: {
        path: path.resolve(__dirname, 'html/js_wp'),  
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader"
        }]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 注意: priority属性
                // 其次: 打包业务中公共代码
                common: {
                    name: "common",
                    chunks: "all",
                    minSize: 1,
                    priority: 0
                },
                // 首先: 打包node_modules中的文件
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10
                }
            }
        }
    }
};
