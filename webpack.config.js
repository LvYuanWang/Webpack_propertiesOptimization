const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/main.js",
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:5].js"
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  // 缓存
  cache: {
    // 开启缓存配置
    type: "filesystem",
    // 缓存目录
    cacheLocation: path.resolve(__dirname, "cache")
  },
  module: {
    rules: [
      { test: /\.js$/, include: /src/, use: "babel-loader" }
    ]
  }
}