const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        //动态路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            //style添加到dom中
            //从右向左读
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            //匹配less文件
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            //匹配图片文件
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //加载的图片小于limit显示，否则以file形式显示
                            limit: 100000,
                            //打包加入信息
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$' :'vue/dist/vue.esm.js'
        }
    }
}