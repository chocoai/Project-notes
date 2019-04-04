import axios from 'axios'
const Http = {}
Http.install = function (Vue) {
  // 设置默认请求路径
  axios.defaults.baseURL = 'http://10.130.136.171:8090'
  // 设置请求头
  axios.defaults.headers = {
    Cookie: 'dddddddd',
    token: 'dddasdas'
  }
  // 设置请求体
  // axios.defaults.headers = {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
  // 请求拦截
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // if (config.url !== 'login') {
    //   const AUTH_TOKEN = localStorage.getItem('token')
    //   // this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    // }
    // options设置请求头的时候前后端分离的时候先会有一个options请求去试探之后设置请求头的时候  options中是不会携带设置的请求头的内容的
    // 不同域下的cookie不能携带  只有给自己的域发送请求才可以携带cookie
    // axios.defaults.withCredentials = true


    // 也就是说 cookies是不能跨域的  而且只能获取相同域下的cookies  
    // 设置cookies的方法  
    document.cookie = 'key = ' + 'value'
    document.cookie = 'asd = dddd'
    config.headers.Authorization = 'aaaaaaaaaaaaaaa'
    config.headers.Referer = 'aaaaaaaaaaaaaaa'
    config.headers.Cookie = 'aaaaaaaaaaaaaaa'
    config.headers.sdasdasd = 'aaaaaaaaaaaaaaa'
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

  // axios.defaults.withCredentials = false
  Vue.prototype.$http = axios
}
export default Http
