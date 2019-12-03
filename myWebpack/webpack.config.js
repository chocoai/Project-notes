const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack  是  node写的    node的写法
module.exports = {
  // mode: 'development', // 默认两种  production（生产） development（开发）
  mode: 'production', // 默认两种  production（生产） development（开发）  ->>>>>>> 代码会被压缩
  entry: './src/index.js', // 入口
  output: { // 出口
    // 如果想让生成的文件每次名字都不一样就可以加一个hash名称  如下 对应引入的HTML也会发生改变 而且现在每次打包之后原来的打包文件不会被清除
    // hash后面的数字规定hash显示的位数
    filename: 'bundle.[hash:5].js', // 打包后的文件名
    path:  path.resolve(__dirname,'dist')// 路径必须是绝对路径
  },
  devServer: { // 开发服务器的配置 webpack-dev-server 会生成一个服务 
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000, 
    progress: true, // 进度条
    compress: true,  // 压缩
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 入口的模板文件
      filename: 'index.html', // 打包之后的文件名称
      // html是否压缩
      minify: {
        // 是否删除HTML的双引号
        removeAttributeQuotes: true,
        // 折叠空行
        collapseWhitespace: true,
      },
      // 加一个hash戳  避免缓存的问题
      hash: true
    })
  ],
  // 模块
  moduel: {
    // 规则
    rules: [
      {
        test: /\.css/,
        use: [
          
        ]
      }
    ]
  }
}
