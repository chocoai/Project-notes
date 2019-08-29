const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口 来指定一个入口起点
  entry: './app.js',
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/index.html'
    })
  ],
  // 出口文件 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
