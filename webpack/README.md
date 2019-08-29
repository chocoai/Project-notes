# webpack
**webpack.config.js**
```js
  const path = require('path)
  module.exports = {
    // 入口文件  --- js
    entry: './app.js',
    // 插件
    // npm install 插件
    // 导入

    // 例子
    // npm install html-webpack-plugin
    // const HtmlWebpackPlugin = require('html-webpack-plugin')
    plugins: [
      new HtmlWebpackPlugin(
        template: './views/index.html'
      )
    ],
    // 出口文件和路径
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'myWebpack'
    }
  }
```