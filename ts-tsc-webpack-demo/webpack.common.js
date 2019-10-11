// webpack.common.js 公用的配置文件

const path = require('path');

module.exports = {


    entry: './ts/main.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'html/js_wp')
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
