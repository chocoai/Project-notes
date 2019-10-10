let arr = [1, 2, 3]
let arr_new = ['a', 'b', 'c']

// 不改变原数组=======================================
// ------ join 将数组按照指定字符分割--------
console.log(arr.join(','))
// ------ concat 合并数组-------
console.log(arr.concat(arr_new))
// 扩展运算符合并
console.log([...arr, ...arr_new])
console.log([...arr_new, ...arr])
// 改变原数组=========================================
// ------ 栈方法 先进先出 ------
arr.shift()
arr.unshift(1)
// ------ 队列方法   后进先出 ------
arr.push(4)
arr.pop()

// -------  从索引1开始删除  删除一个元素 ----------
arr.splice(1, 1)
// -------  从索引1开始删除  删除一个元素 并且用另个一个元素替换----------
arr.splice(1, 1, 3)


// filter   返回一个新数组 不影响原数组
let new_arr = arr.filter( item => item > 2)
console.log(new_arr)