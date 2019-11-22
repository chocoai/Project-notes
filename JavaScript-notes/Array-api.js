let arr = [1, 2, 3, 4]
let arr_new = ['a', 'b', 'c']

// 不改变原数组=========================================================================================================================

// ------ join 将数组按照指定字符分割--------
console.log(arr.join(','))

// ------ concat 合并数组 不会改变原数组-------
console.log(arr.concat(arr_new))
console.log(arr.concat(1, 2, 3, arr_new))
// [1, 2, 3, 4, 1, 2, 3, 'a', 'b', 'c']

// 扩展运算符合并
console.log([...arr, ...arr_new])
console.log([...arr_new, ...arr])

// ------ every 遍历数组 返回一个Boolean值-------
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// 改变原数组===========================================================================================================================

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
let new_arr = arr.filter(item => item > 2)
console.log(new_arr)

// find  返回数组中满足条件的第一项    下面获取数组arr中大于0的   返回了1
let new_index = arr.find(item => item > 0)
console.log(new_index) // 1

// map 返回一个新数组
let news_Arr = arr.map(item => item + 1)
console.log(arr, news_Arr)

// reduce   x 累加值（第一次直接拿到数组的第一项）  y 是每次传入的值
let new_reduceArr = arr.reduce((x, y) => { 
  console.log(x)
  console.log(y)
  return x + y
})
console.log(new_reduceArr)


// Array===========================================================================================================================
/**
 * return Boolean
*/
Array.isArray()