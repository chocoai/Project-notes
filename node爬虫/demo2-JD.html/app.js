// let req = require('http')
// 首先http模块只能发送http请求  这里使用第三方封装好的   既可以发送https 又可以发送http
let req = require('request')
// 可以向jQuery一样操作DOM
let cheerio = require('cheerio')
// 引入node中操作mongod的包
let MongoClint = require('mongodb').MongoClient
// 本地mongo服务地址
let url = `mongodb://127.0.0.1:27017/`

// 发送请求
req({
  url: `https://youhui.pinduoduo.com/search/landing?catId=18`,
  encoding: 'UTF8',
  method: 'get'
}, (err, res, body) => {
  // 请求成功的时候
  if (!err && res.statusCode == 200) {
    let _$ = cheerio.load(body)
    // 创建一个新的数组 接收数据
    let pushArr = []
    // 清洗数据
    _$('.card-wrapper').children().map(function () {
      let url = 'https:' + _$(this).attr('href')
      let imgurl = 'https:' + _$(this).find('img').attr('src')
      let name = _$(this).children().find('.double-line-desc').text()
      let price = _$(this).children().children().children().children().text()
      pushArr.push({
        url,
        imgurl,
        name,
        price
      })
    })
    // 链接mongo
    MongoClint.connect(url, {useNewUrlParser: true}, function (err, client) {
      // 要链接的数据库名
      let db = client.db('zyg')
      // 要链接的表名
      let collection = db.collection('JD')
      // 插入数据
      collection.insertMany(pushArr, function (err, result) {
        console.log(result)
      })
    })
  } else {
    console.log(err, 222)
  }
})
