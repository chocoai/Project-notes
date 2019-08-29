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
**入口**
+ entry
  ```txt
    入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。只能是js文件
  ```
  ```js
    module.exports = {
      entry: './app.js'
    }
  ```
**出口**
+ output
  ```txt
    output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。
  ```
  ```js
    module.exports = {
      output: {
        path: '/dist',
        filename: 'my_webpack'
      }
    }
  ```
**插件**
+ plugin
  ```txt
    plugin是用于扩展webpack的功能，各种各样的plugin几乎可以让webpack做任何与构建先关的事情。 plugin的配置很简单，plugins配置项接收一个数组，数组里的每一项都是一个要使用的plugin的实例，plugin需要的参数通过构造函数传入。
  ```