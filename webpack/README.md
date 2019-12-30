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
  + clean-webpack-plugin
    ```
      npm install clean-webpack-plugin --save-dev
    ```
    ```
      生产环境编译文件的时候，先把 build或dist (就是放生产环境用的文件) 目录里的文件先清除干净，再生成新的。
      我们要在 build 之前把它们全清空，这正是 clean-webpack-plugin 发挥的作用。
    ```
    ```javascript

      // webpack.config.js
      const CleanWebpackPlugin = require('clean-webpack-plugin') 
      plugins: [
        new CleanWebpackPlugin(['*.*'], {
          root: path.join(__dirname, 'dist')
        }), 
      ]
      
    ```
  
  + Terser-webpack-plugin
    ```
      npm install terser-webpack-plugin --save-dev
    ```
    ```
      转换器 清除console
    ```
    ```javascript

      configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
          config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
          config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
          config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
            'console.log'
          ]
        }
      }

    ```

+ loader
  + style-resources-loader
    ```
      vue add style-resources-loader
    ```
    ```
      将less等全局的样式文件在main.js中集中引入 只需要main引入一次
    ```
    ```js
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [path.resolve(__dirname, './src/style/encapsulation.less')]
      }
    ```
  + image-webpack-loader
    ```
      npm install image-webpack-loader --save-dev
    ```
    ```
      压缩项目中的图片 JPG PNG GIF WEBP等图片资源
    ```
    ```javascript
      // 对 chainWebpack 更加细致的设置和配置
      chainWebpack: config => {
        config.module
          .rule('images')
          .test(/\.(gif|png|jpe?g|svg)$/i)
          .use('image-webpack-loader')
          .loader('image-webpack-loader')
          .options(
            { 
              // https://www.npmjs.com/package/image-webpack-loader
              // 使用此选项，当使用webpack“调试”模式并且加载程序充当常规文件加载程序时，不会执行任何处理。在开发或使用webpack dev server时，使用此选项可加快初始编译和后续编译（在较小程度上）。正常的构建被正常处理，输出优化的文件。
              // bypassOnDebug: true, 
              // Same functionality as bypassOnDebug option, but doesn't depend on webpack debug mode, which was deprecated in 2.x. Basically you want to use this option if you're running webpack@2.x or newer.
              // disable: true,
              // -------- 上面两个配置项都是老版本的配置 默认值都为false 修改之后图片不会被压缩

              // 压缩png
              pngquant: {
                // 品质  0.65-0.9
                quality: [0.65, 0.90],
                // 压缩速度
                speed: 4
              },
              // 好像是压缩png详细配置的
              // optipng: {

              // },
              // webp
              webp: {
                quality: 75
              },
              // jpg
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // gif
              gifsicle: {
                // 是否开启gif的压缩和渐进式渲染
                interlaced: false,
                // 优化级别 1-3
                optimizationLevel: 3,
                // 颜色选择
                colors: 256
              },
            }
          )
      },
    ```