const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  output: {
    filename: "scripts/[name].[contenthash:5].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin({
      test: /\.js$/,
      algorithm: "gzip",  // 配置压缩算法
      filename: "gzips/[name].gz"  // 配置压缩后的文件名
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
}