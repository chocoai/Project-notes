let a = [1, 2, 3]

// 不改变原数组=======================================
// ------ join --------
console.log(a.join(','))

// 改变原数组=========================================
// ------ 栈方法 先进先出 ------
a.shift()
a.unshift(1)
// ------ 队列方法   后进先出 ------
a.push(4)
a.pop()