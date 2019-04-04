// vue.config.js
module.exports = {
  devServer: {
    host: '172.30.24.136', // 配置IP
    port: 10011,
    proxy: {
      '/apis': {
        target: 'http://aaa.shinewing.com/api/validatelogin',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  }
}
