const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash:5].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:5].css"
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },
  optimization: {
    // 是否要启用压缩, 默认情况下, 生产环境会自动开启, 开发环境不会开启
    // minimize: false,
    minimizer: [  // 压缩时使用的插件, 可以有多个
      new TerserPlugin(), // 使用 TerserPlugin 压缩 js
      new CssMinimizerPlugin() // 使用 CssMinimizerPlugin 压缩 css
    ]
  }
}