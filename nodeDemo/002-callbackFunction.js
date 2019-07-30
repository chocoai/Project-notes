// Node的异步体现在回调


// 阻塞代码示例
let fs = require('fs')
let dataText = fs.readFileSync('./test/test.txt')
// 直接服务文件打印的是十六进制编码
console.log(dataText)
console.log(dataText.toString())
console.log(123)
// 从打印的结果可以看到 显示读取了文件  之后才是打印123  但是当文件读取很慢的之后  就会阻塞后面代码的执行 



// 非阻塞代码示例
fs.readFile('./test/test.txt', (err, data) => {
  if (err) return console.error(err)
  console.log(data.toString())
})
console.log(456)
// 从上面的打印结果可以看到  先打印的是456 后来打印的是文件的内容 这样就不会阻塞后面代码的执行