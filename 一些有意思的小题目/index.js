/**
 *  不使用类似for，while循环控制语句和js本身自带方法（如：forEach）的情况下，实现将一个空数组[]赋值成[0,2,4,6,8,10,...,100]，范围0-100便可。
 * 
 *  简单函数柯里化
 *  递归
 */
function getArr(maxNum, space) {
  let firstNum = 0;
  let arr = []
  return function forArr() {
    if (firstNum > maxNum) {
      return arr;
    }
    arr.push(firstNum)
    firstNum += space
    forArr()
  }
}
let arr = getArr(100, 2)
let nums = arr()
console.log(nums)


/**
 * 输出顺序
 * 
 * 宏任务
 * 微任务
 * promise
 * 
 * new Promise属于宏任务
 * 宏任务 -> 微任务
 * 微任务 -> nextTick -> Promise -> setTimeout
 */
console.log('1');

setTimeout(function () {
  console.log('2');
  process.nextTick(function () {
    console.log('3');
  }) 
  new Promise(function (resolve) {
    console.log('4');
    resolve();
  }).then(function () {
    console.log('5')
  })
}) 

process.nextTick(function () {
  console.log('6');
}) 

new Promise(function (resolve) {
  console.log('7');
  resolve();
}).then(function () {
  console.log('8')
}) 

setTimeout(function () {
  console.log('9');
  process.nextTick(function () {
    console.log('10');
  }) 
  new Promise(function (resolve) {
    console.log('11');
    resolve();
  }).then(function () {
    console.log('12')
  })
})

// 怎么理解浏览器缓存

// vue项目可以怎样优化