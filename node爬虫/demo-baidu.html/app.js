let http = require('http')
let path = require('path')
let fs = require('fs')
let req = http.request(`http://www.baidu.com`, res => {
  if (res.statusCode >= 200 && res.statusCode < 300 || res.statusCode == 304) {
    let stream
    // 读取的时候赋值
    res.on('data', data => {
      stream = data
    })
    // 读取结束之后写入到baidu.html中
    res.on('end', () => {
      // 获取要写入的文件
      let dataPath = path.resolve(__dirname, 'dataPath') + `/baidu.html`
      // 创建一个可写流
      let write = fs.createWriteStream(dataPath)
      // 写入
      write.write(stream, 'UTF8')
      // 标记文件结尾
      write.end()
      // 处理写入流 设置监听器
      // 写入中
      write.on('finish', () => {
        console.log('写入完成')
      })
      // 写入出错
      write.on('error', (err) => {
        console.log(err)
      })
    })
  }
})

req.write('')
req.end()