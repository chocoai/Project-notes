let obj = {
  name: 'zhh',
  age: 12
}

/* --------------------------------------------------------------- */
// Object.keys 返回对象的key的一个集合（数组）
console.log(Object.keys(obj))

/* --------------------------------------------------------------- */
// Object.values 返回对象的value的一个集合（数组）
console.log(Object.values(obj))

/* --------------------------------------------------------------- */
// [ [ 'name', 'zhh' ], [ 'age', 12 ] ]  返回一个二维数组
console.log(Object.entries(obj))

/* --------------------------------------------------------------- */
// 冻结一个对象
// 一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，
// 不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
// 此外，冻结一个对象后该对象的原型也不能被修改。
// freeze() 返回和传入的参数相同的对象。
console.log(Object.freeze(obj))

let newobj = {
  a: 1,
  ...obj
}
console.log(newobj)
// 结构赋值 后来居上
newobj = {
  name: 1,
  ...obj
}
console.log(newobj)

/* --------------------------------------------------------------- */
Object.prototype.hasOwnProperty()
/* --------------------------------------------------------------- */
console.log(newobj.hasOwnProperty('name'))
/* --------------------------------------------------------------- */
console.log(Object.prototype.hasOwnProperty.call(newobj, 'name'))


/* --------------------------------------------------------------- */
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// target 目标对象
// sources 源对象
Object.assign(target, ...sources)
// 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性
// assign 拷贝的只是属性值，如果源对象的属性值是一个对象的引用，那么他也指向那个引用
// 也就是说值拷贝源对象的第一层属性  （浅拷贝）


/* --------------------------------------------------------------- */
// Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）
// 通俗点就是 Object.entries() 可以把一个对象的键值以数组的形式遍历出来，结果和 for...in 一致，但不会遍历原型属性
let a = {
  name: 'zs',
  age: 15,
  sayHi: () => {
    return this.name
  },
  family: {
    father: 'Tom'
  }
}
let re_a = Object.entries(a)
// 返回一个数组 只遍历最外层属性
// re_a = [
//   ['name', 'zs'],
//   ['age', 15],
//   ['sayHi', fn()],
//   [
//     'family',
//     {
//       father: 'Tom'
//     }
//   ]
// ]