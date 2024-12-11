const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const globAll = require("glob-all");
const htmlPath = path.resolve(__dirname, "public/index.html");
const srcAbs = path.resolve(__dirname, "src");
// ${srcAbs}**/*.js: src目录下的所有js文件
const paths = globAll.sync([`${srcAbs}**/*.js`, htmlPath]);

module.exports = {
  mode: "production",
  output: {
    filename: "[name].[contenthash:5].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:5].css"
    }),
    new PurgeCSSPlugin({ paths })
  ]
}