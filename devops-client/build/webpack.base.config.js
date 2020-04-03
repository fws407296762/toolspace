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
        test:/.ts[x]?/,
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
  devServer:{
    hot:true,
    compress:true,
    open: true
  }
}