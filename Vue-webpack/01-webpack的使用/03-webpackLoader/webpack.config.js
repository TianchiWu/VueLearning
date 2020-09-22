const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        //获取动态路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
        ]
    }
}