const path  = require('path')
module.exports = {
  // 入口 来指定一个入口起点
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}