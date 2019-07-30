// Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

// Node.js 里面的许多对象都会分发事件：
// 一个 net.Server 对象会在每次有新连接时触发一个事件
// 一个 fs.readStream 对象会在文件被打开的时候触发一个事件
// 所有这些产生事件的对象都是 events.EventEmitter 的实例。

// EventEmitter类
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

// 你可以通过require("events");来访问该模块。

// 引入events模块
let events = require('events')
// 创建events实例
let eventsEmitter = new events.EventEmitter()
let some_event_cb = () => {
  console.log('some_event 事件触发')
}
// 用法 
eventsEmitter.on('some_event', some_event_cb)
setTimeout(() => {
  eventsEmitter.emit('some_event')
}, 1000)
// 其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。


// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
// 也就是说如果  同时定义两个相同的事件 事件的回调都会被执行
let events_cb_fn1 = () => {
  console.log('event on one')
}
let events_cb_fn2 = () => {
  console.log('event on two')
}
// 定义挂载
eventsEmitter.on('eventGet_cb', events_cb_fn1)
eventsEmitter.on('eventGet_cb', events_cb_fn2)

eventsEmitter.emit('eventGet_cb')

// 方法介绍
// 1. 为指定事件添加一个监听器到监听器数组的尾部
// addListener(event, listener)
// -----------------------------------------------------------test
// eventsEmitter.addListener('eventGet_cb', () => {
  //   console.log(1111)
  // })
// eventsEmitter.emit('eventGet_cb')


// 2. 为指定事件注册一个监听器， 接收一个event字符串和一个回调函数
// on(event, listener)
// -----------------------------------------------------------test
// eventsEmitter.on('events', cb_fn)


// 3. 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器   即使调用两次   也只会执行一次
// eventsEmitter.once('onceEvent', () => {
//   console.log(111)
// })
// eventsEmitter.emit('onceEvent')
// eventsEmitter.emit('onceEvent')


// 4. 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。 它接受两个参数，第一个是事件名称，第二个是回调函数名称。
// removeListener(event, listener)
// eventsEmitter.removeListener('eventGet_cb', events_cb_fn1)
// // 将事件名为eventGet_cb 回调函数为events_cb_fn1的事件删除
// eventsEmitter.emit('eventGet_cb')


// 5. 移除所有事件的所有监听器 如果指定事件 就移出指定事件的所有监听器
// removeAllListeners(event, )
// 5.1 eventsEmitter.removeAllListeners()
// 因为之前的事件监听器都被清除 所以在触发事件没有输出
// eventsEmitter.emit('eventGet_cb')
// 5.2  只删除some_event事件的监听器 所以之后触发事件没有输出
// eventsEmitter.removeAllListeners('some_event')
// eventsEmitter.emit('some_event')

// 6. 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量
// setMaxListeners(n)

// 7. 返回指定事件的所有监听器, 名字   函数
// console.log(eventsEmitter.listeners('eventGet_cb'))

// 8. 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
// eventsEmitter.emit('eventGet_cb')




// 类方法
// 1. 返回指定事件的监听器      数量
// console.log(eventsEmitter.listenerCount('eventGet_cb'))





// 事件
// 1. newListener
// 该事件在添加新监听器时被触发。
// *   event - 字符串，事件名称

// *   listener - 处理事件函数


// error 事件
// EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

eventsEmitter.emit('error'); 