// Buffer 缓存区

// JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

// 但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

// 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
// Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
// 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。

// 原始数据存储在 Buffer 类的实例中。

// 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

// 字符编码
// ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

// utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

// utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

// ucs2 - utf16le 的别名。

// base64 - Base64 编码。

// latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

// binary - latin1 的别名。

// hex - 将每个字节编码为两个十六进制字符。



// 1. Buffer 创建
// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10)

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1)

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10)

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3])

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést')

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1')


// 2. 写入缓存区
// 语法： buf.write(string[, offset[, length]][, encoding])
// 参数： 参数描述如下：
//                        string - 写入缓冲区的字符串。
//                        offset - 缓冲区开始写入的索引值，默认为 0 。
//                        length - 写入的字节数，默认为 buffer.length
//                        encoding - 使用的编码。默认为 'utf8' 。
// 返回值： 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。


// 案例   写入缓存区
let buf = Buffer.alloc(10)
let len = buf.write('zhaoyaguo')
console.log('写入字节数' + len)

// 2. 从缓存区读取数据
// 语法： buf.toString([encoding[, start[, end]]])
// 参数 参数描述如下：
//                     encoding - 使用的编码。默认为 'utf8' 。
//                     start - 指定开始读取的索引位置，默认为 0。
//                     end - 结束位置，默认为缓冲区的末尾。

// 案例  读取缓存区
let conent = buf.toString()
console.log(conent)

// buf 写入
buf_as = Buffer.alloc(26)
for (var i = 0 ; i < 26 ; i++) {
  buf_as[i] = i + 97
}
// buf 读取
console.log( buf_as.toString('ascii'))       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf_as.toString('ascii',0,5))   // 输出: abcde
console.log( buf_as.toString('utf8',0,5))    // 输出: abcde
console.log( buf_as.toString(undefined,0,5)) // 使用 'utf8' 编码, 并输出: abcde


// 将buf转换为json对象
// buf.toJSON()
// 当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。


buf_json = Buffer.alloc(10)
buf_json.write('[1, 2, 3]')
console.log(buf_json.toString())
console.log(buf_json.toJSON())


// 3. 缓存区合并
buf_cont1 =  Buffer.alloc(19)
buf_cont1.write('abc-')
buf_cont2 =  Buffer.alloc(10)
buf_cont2.write('>def')
let newBuf_cont = Buffer.concat([buf_cont1, buf_cont2])
// 首先在缓存区写入两个字符串  一个长度为19 一个为10
// 使用Buffer.concat合并 参数为数组， 待合并的为数组的每一项  
// 最后将合并的缓存输出
console.log(newBuf_cont.toString())   // abc-               >def




// 4. 缓冲区比较
// 语法   Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
// buf.compare(otherBuffer);
// 目前还不太懂缓存区比较的原理
let result = buf_cont1.compare(buf_cont2)
console.log(result)


// 5. 拷贝缓冲区
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// 参数
// 参数描述如下：
//                      targetBuffer - 要拷贝的 Buffer 对象。
//                      targetStart - 数字, 可选, 默认: 0
//                      sourceStart - 数字, 可选, 默认: 0
//                      sourceEnd - 数字, 可选, 默认: buffer.length
// 返回值   没有返回值。
// buf_cont2.copy(buf_cont1, 1)
// console.log(buf_cont1.toString())

bufCopy1 = Buffer.alloc(10)
bufCopy1.write('abc')
bufCopy2 = Buffer.alloc(10)
bufCopy2.write('zyg')
// 把2拷贝到1的指定索引位置
bufCopy2.copy(bufCopy1, 1)
console.log(bufCopy1.toString())




// 6. 缓冲区裁剪   裁剪的开始位置和结束位置
// buf.slice([start[, end]])

buf_slice = Buffer.alloc(10)
buf_slice.write('123456')
let buf_slice_res = buf_slice.slice(0, 2)
console.log(buf_slice_res.toString())


// 缓存区的长度  缓存区的长度输出的是定义时的长度  而不是实际存放数据的长度
// length
let len_buf = Buffer.alloc(100)
len_buf.write('abc')
console.log(len_buf.length)


// 方法参考手册 ： https://www.runoob.com/nodejs/nodejs-buffer.html
