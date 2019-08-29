const path  = require('path')
module.exports = {
  // 入口 来指定一个入口起点
  entry: './app.js',
  module: {
    rules: [
      {test: /\.html$/, use: 'raw-loader'}
    ]
  },
  // 出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
}
