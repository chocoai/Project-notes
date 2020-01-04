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
      .options({ 
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
        })
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
