const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    other: "./src/other.js"
  },
  output: {
    filename: "scripts/[name].[contenthash:5].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash:5].css",
      // chunkFilename: "common.[contenthash:5].css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "other.html",
      chunks: ["other"]
    })
  ],
  optimization: {
    splitChunks: {
      // 该配置是分包策略的全局配置
      chunks: "all", // 对素有chunk都要应用分包策略
      // maxSize: 20000, // 20kb: 超过20kb的chunk会被分包(默认值是30kb)
      // 分包策略的其他配置
      // automaticNameDelimiter: "~", // 分包的文件名中间的连接符
      // minChunks: 4, // 一个chunk被引用2次以上才会被分包
      // minSize: 0, // 10kb: 超过10kb的chunk会被分包
      // 缓存组
      cacheGroups: {
        // 属性名是缓存组的名称, 会影响到分包的chunk名
        // 属性值是缓存组的配置, 缓存组继承所有的全局配置, 也有自己特殊的配置
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/, // 当匹配到相应的模块时, 将这些模块进行单独打包
        //   priority: -10, // 缓存组优先级，优先级越高，该策略越先进行处理，默认值为0
        // },
        // default: {
        //   minChunks: 2, // 会覆盖全局配置,一个chunk被引用2次以上才会被分包
        //   priority: -20, // 缓存组优先级，优先级越高，该策略越先进行处理，默认值为0
        //   reuseExistingChunk: true, // 如果一个模块已经被打包过了, 就不会再次打包
        // }
        // 利用缓存组完成css公共样式的抽离
        commonStyles: {
          test: /\.css$/, // 匹配样式模块
          minSize: 0, // 0kb: 超过0kb的chunk会被分包(测试用)
          minChunks: 2, // 一个chunk被引用2次以上才会被分包
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },
  stats: {
    chunks: false,
    modules: false
  }
}