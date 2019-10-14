const path = require('path')
module.exports = {
  // 动态路由渲染会报错  删除就好了
  publicPath: '',
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000, // 入口起点的最大体积
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  devServer: {
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。如果只想显示编译器错误：
    // overlay: true
    // 如果要显示警告和错误：
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
    overlay: {
      warnings: false,
      errors: false
    }
  },
  // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项
  pluginOptions: {
    // 引入 vue add style-resources-loader 因为脚手架自带  所以可以直接使用脚手架安装 安装之后自动在vue.config.js中配置  只需要补充要全局的less文件路径即可
    // 引入全局less文件   less（mixin）
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/style/mixin.less')]
    }
  }
}
