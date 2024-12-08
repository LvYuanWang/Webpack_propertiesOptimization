const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "jquery": ["jquery"],
    "lodash": ["lodash"]
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]" // 通过全局变量访问库
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dll", "[name].manifest.json"), // 生成清单文件
      name: "[name]" // 与 output.library 一致
    })
  ]
}