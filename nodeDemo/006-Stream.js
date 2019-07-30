// Node.js Stream(流)
// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。


// Node.js，Stream 有四种流类型：
//             Readable - 可读操作。
//             Writable - 可写操作。
//             Duplex - 可读可写操作.
//             Transform - 操作被写入数据，然后读出结果。


// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
//             data - 当有数据可读时触发。
//             end - 没有更多的数据可读时触发。
//             error - 在接收和写入过程中发生错误时触发。
//             finish - 所有数据已被写入到底层系统时触发


// 1. 从流中读取数据
let fs = require('fs')
let data = ''
// 创建可读流
let readerStream = fs.createReadStream('./test/test.txt')
// 设置读取编码
readerStream.setEncoding('UTF8')
// 处理流事件 --> data, end, and error

// 读取中
readerStream.on('data', chunk => {
  console.log(chunk, '----------')
  data += chunk
})
// 读取结束
readerStream.on('end', () => {
  console.log(data)
})
// 读取出错
readerStream.on('error', (err) => {
  console.log(err)
})
console.log('程序执行完成')



// 2. 写入流
let writeData = '这个将要写入文件'
// 创建可写流
let writeStream = fs.createWriteStream('./test/write.txt')
// 设置写入内容和写入编码
writeStream.write(writeData, 'UTF8')
// 设置写入结束  标记文件末尾
writeStream.end()

// 处理流事件 --> data, end, and error
// 写入结束
writeStream.on('finish', () => {
  console.log('写入完成')
})
// 写入出错
writeStream.on('error', (err) => {
  console.log(err)
})


// 3. 管道流
// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
// source =(pipe)> dest
// 我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程

// 现在将test.txt 的文件内容写到write.txt中

// 创建可读流
let newRead = fs.createReadStream('./test/test.txt')
// 创建可写流
let newWrite = fs.createWriteStream('./test/write.txt')
// 管道流操作
// 读取test文件的内容写入到write文件
newRead.pipe(newWrite)
console.log('管道流程序执行完成')
// 管道流写入文件问题： 将读取的文件写入另一个文件  会覆盖之前文件的内容
// 解决思路 现将要写的文件内容读取存储  之后也一起放进去



