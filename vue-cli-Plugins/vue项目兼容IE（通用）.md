1. 安装babel-polyfill
  `yarn add babel-polyfill --save`

2. src/main.js 引入babel-polyfill
  `import '@babel/polyfill`

3. 在根目录增加babel.config.js文件
  ```
  module.exports = {
    presets: [
      ['@vue/app', {
        useBuiltIns: 'entry' // src全局es5编译
      }]
    ]
  }
  ```

4. vue.config.js引用babel-polyfill并且加入配置
  ```
  require('babel-polyfill')
  module.exports = {
    ...{ /* 一些别的配置 */ },
    
    // 关键配置：node_modules里面需要用babel-loader进行编译的包（node_modules的包如果没做 es6 => es5 转码则需要自己用babel-polyfill进行手动处理）
    // 如果IE下还跑不起来，控制台发现有其他es6语法的，尝试调试去找到底是哪个包
    transpileDependencies: [
      'iview',
      'axios'
    ],
  }
  ```
