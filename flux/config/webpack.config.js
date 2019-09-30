const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// 注意 : webpack主要支援CommonJS(ES5)語法。
//       所以不支援import，而是require()
module.exports = {
    // entry: webpack打包 & dev-server程式進路點
    // default: './src/index.js'
    // sample: entry: './web/index.js'
    entry: {
        // [name]: {value}
        home: './web/index',
        about: './web/about',
    },
    // output:  webpack打包輸出路徑
    // default: './dist/main.js'
    output:{
        // path: path.resolve(__dirname, 'web-dist'),
        // publicPath: '/websample/'
        path: path.resolve(__dirname, '../web-dist'),
        filename: '[name].bundle.js',
    },
    // mode: 1. webpack根據mode設定process.env.NODE_ENV  
    //       2. webpack根據不同的mode增減需要打包的內容，以減少打包沒必要的內容
    // default: 'production'
    mode:'production',
    // loader: 協助webpack理解JS & JSON以外的文件
    //         當JS文件中有檔案被 import/require()時，loader會被啟用
    // loader.test: 指定loader被使用於那些檔案
    // loader.use: 指定要使用的loader
    module:{
        // noParse: 忽略解析指定的檔案
        // sample: noParse:/\.txt$/
        noParse: (content)=> /\.gitignore$/.test(content),
        // rules: webpack建立模組的規則。
        rules:[
            // Rule object: 由'condition', 'result', 'nested rule'組成
            // ref: https://webpack.js.org/configuration/module/#rule
            {
                // enforce: 指定loader的執行順序，有pre','post'四種設定，
                // pre: 表示該Loader的執行順序放在最前面
                // post: 表示該Loader的執行順序放在最後面
                enforce: 'post',
                // Condition ref: https://webpack.js.org/configuration/module/#condition
                // test: 是Rule.resource.test的縮寫(設定只能二擇一)。
                // include: 解析檔案需要包含指定路徑
                // exclude: 解析檔案需要排除指定路徑
                test: /\.txt$/,
                include: [
                    path.resolve(__dirname, "folder")
                ],
                exclude: [
                    path.resolve(__dirname, "folder/demo-files")
                ],
                // use: 指定使用的loader
                // sample: 
                // use: (info) => [{
                //     loader:'raw-loader',
                //     // options:{}
                // }]
                use: 'raw-loader',
            },
            {
                test: /\.js$/,
                use: [{
                    loader:'babel-loader',
                    options:{
                        configFile: path.resolve(__dirname, "babel.config.js") 
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader',
            //     options: 
            //     {
            //         modules: true,
            //         localIdentName: '[name]-[local]-[hash:base64:5]',
            //     },
            //     use: [
            //         'style-loader'
            //     ],
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    // 'postcss-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    // 'postcss-loader',
                    // {
                    //     loader: "less-loader",
                    //     options: {
                    //         javascriptEnabled: true
                    //     }
                    // }
                ]
              },
        ]
    },
    // plugins: loader用來轉換某些類型檔案的外掛，讓webpack可以執行更多打包上的行為。
    //          使用任何外掛需要require()。
    // sample:
    //         plugins:[
    //             new HtmlWebPackPlugin({
    //                 template: path.resolve(__dirname, "../html/index.html"),
    //                 filename: "./index.html"
    //             })
    //         ]
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "../html/index.html"),
            hash: true,
            chunks: ['home'],
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "../html/about.html"),
            hash: true,
            chunks: ['about'],
            filename: "./about.html"
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    // devServer: 針對webpack-dev設定
    devServer: {
        host: '127.0.0.3',
        port: 7788,
        index: 'about.html'
    }
}