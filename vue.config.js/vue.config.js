const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
module.exports = {
  // 动态路由渲染会报错  删除就好了
  /* 部署应用包的baseURL */
  publicPath: '',
  /* 打包生成的生产环境构建的目录 */
  outputDir: 'dist',
  assetsDir: '',
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 生成report
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
    // 解决ie11兼容ES6
    // 生产环境是否生成 sourceMap 文件
    config.entry('main').add('babel-polyfill')
    // 开启图片压缩
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
    // 开启js、css压缩
    if (process.env.NODE_ENV === 'production') {
      // 删除预加载
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        })
      )
    }
  },
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
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        // 生产环境自动删除console
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
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
    },
    proxy: {

    }
  },
  transpileDependencies: [
    // 指定对第三方依赖包进行babel-polyfill处理
  ],
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
