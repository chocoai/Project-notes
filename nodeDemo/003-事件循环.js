// Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

// Node.js 几乎每一个 API 都是支持回调函数的。

// Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

// Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.



// node有多个内置的事件，我们可以通过events模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

// 引入events模块
let events = require('events')

// 创建eventEmitter对象
let eventEmitter = new events.EventEmitter()

// 创建事件处理函数
let connectHandler = () => {
  console.log('创建成功！')
  // 调用下一个事件
  eventEmitter.emit('data_getRective')
}
// 绑定事件处理函数
let data_getRectiveHandler = () => {
  console.log('数据连接成功')
  eventEmitter.emit('Enddata')
}
// 绑定事件处理函数
let EnddataHandler = () => {
  console.log('程序执行完成')
}
// 绑定connertion事件处理程序
eventEmitter.on('connertion', connectHandler)
eventEmitter.on('data_getRective', data_getRectiveHandler)
eventEmitter.on('Enddata', EnddataHandler)
// 触发connertion 事件
eventEmitter.emit('connertion')

// Summary: 事件执行机制 都会有一个回调  在回调的时候调用下一个事件 


// 一般异步操作的函数将回调函数作为最后一个参数，回调函数接收错误对象作为第一个参数
// 当我们使用非阻塞模式去读取文件的时候  如果读取成功 err为null  如果读取失败  err就是有值的  
// let fs = require('fs')
// fs.readFile('xxxxx', function (err, data) {
  
// })