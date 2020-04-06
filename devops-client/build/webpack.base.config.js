const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require("./config");


module.exports = {
  entry:{
    main:path.join(config.src,"./main.tsx")
  },
  output:{
    path:config.dist,
    filename:"[name].bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:['awesome-typescript-loader']
      },
      {
        test:/\.css$/,
        exclude:/node_modules/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test:/\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
            {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
            {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:config.src + '/views/index.html',
      filename:config.htmlFileName
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve:{
    extensions:['.ts','.tsx','.js','.jsx']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer:{
    hot:true,
    compress:true,
    open: true
  }
}