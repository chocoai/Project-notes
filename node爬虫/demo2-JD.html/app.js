// let req = require('http')
// 首先http模块只能发送http请求  这里使用第三方封装好的   既可以发送https 又可以发送http
let req = require('request')
req({
  url: `https://search.jd.com/Search?keyword=macbook%20pro&enc=utf-8&suggest=3.def.0.V10--12s0,20s0,38s0&wq=mac&pvid=a63ec670912a4d39b16750d43fb77686`,
  // url: `https://www.baidu.com/`,
  method: 'get'
}, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    console.log(body, 111)
  } else {
    console.log(err, 222)
  }
})