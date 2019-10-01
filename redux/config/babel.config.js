module.exports={
    presets: [
        "@babel/env",
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        "react-hot-loader/babel",
        ["import", {
            libraryName: "antd",
            libraryDirectory: "es",
            style: true
        }],
        
        // ["react-css-modules", { 
        //     // "filetypes": { 
        //     //   ".css": {
        //     //     "syntax": "postcss-scss"
        //     //   }
        //     // },
        //     "generateScopedName": "[name]-[local]-[hash:base64:5]" //需與webpack配置中的localIdentName相匹配
        //   }],
       
        // ["transform-import-css", {
        //     "generateScopedName": "[name]-[local]-[hash:base64:5]"
        // }]
    ]   
};