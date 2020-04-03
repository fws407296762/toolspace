const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        loader:'awesome-typescript-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:config.src + '/views/index.html',
      filename:config.htmlFileName
    })
  ],
  resolve:{
    extensions:['.ts','.tsx','.js','.jsx']
  },
  devServer:{
    hot:true,
    compress:true,
    open: true
  }
}