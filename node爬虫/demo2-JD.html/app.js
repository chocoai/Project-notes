// let req = require('http')
// 首先http模块只能发送http请求  这里使用第三方封装好的   既可以发送https 又可以发送http
let req = require('request')
// 可以向jQuery一样操作DOM
let cheerio = require('cheerio')
let MongoClint = require('mongodb').MongoClient
let url = `mongodb://127.0.0.1:27017/`
// console.log(MongoClint)





req({
  url: `https://youhui.pinduoduo.com/search/landing?catId=18`,
  encoding: 'UTF8',
  // url: `https://www.baidu.com/`,
  method: 'get'
}, (err, res, body) => {
  if (!err && res.statusCode == 200) {
    let _$ = cheerio.load(body)
    let pushArr = []
    // console.log(_$('.card-wrapper').html())
    _$('.card-wrapper').children().map(function () {
      // let url = _$(this).find('.goods-detail-card-wrapper').attr('href')
      // console.log(_$(tclshis).html())
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
      // console.log(url, imgurl, name, price)
    })
    MongoClint.connect(url, {useNewUrlParser: true}, function (err, client) {
      // console.log(client)
      let db = client.db('zyg')
      // console.log(db)
      let collection = db.collection('JD')
      collection.insertMany(pushArr, function (err, result) {
        console.log(result)
      })
    })
    // console.log(a)
  } else {
    console.log(err, 222)
  }
})
