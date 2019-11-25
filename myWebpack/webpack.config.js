const path = require('path')
// webpack  是  node写的    node的写法
module.exports = {
  mode: 'development', // 默认两种  production（生产） development（开发）
  entry: './src/index.js', // 入口
  output: { // 出口
    filename: 'bundle.js', // 打包后的文件名
    path:  path.resolve(__dirname,'dist')// 路径必须是绝对路径
  }
}
