// webpack.common.js 公用的配置文件

const path = require('path');

module.exports = {


    entry: './ts/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'js_webpack')
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
    }
};
