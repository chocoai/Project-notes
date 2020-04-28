let str = 'abcd.xls'

// 从前往后找
console.log(str.indexOf('.'))
// 反之
console.log(str.lastIndexOf('.'))

// 按照指定字符串切割成数组
console.log(str.split('.'))

// 在字符串str之前添加空字符(参数大于字符串长度时添加)
console.log(str.padStart(18))

// 在字符串str之后添加空字符(参数大于字符串长度时添加)
console.log(str.padEnd(19))