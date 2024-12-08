const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    "index": "./src/index.js",
    "other": "./src/other.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:5].js"
  },
  plugins: [
    new CleanWebpackPlugin({
      // 要清除的文件目录
      // 摘除掉dll文件夹与它内部的文件
      cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/**"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    // 控制打包结果
    // webpack.DllReferencePlugin 用于加载动态链接库
    new webpack.DllReferencePlugin({
      manifest: require("./dll/jquery.manifest.json")
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/lodash.manifest.json")
    })
  ]
}