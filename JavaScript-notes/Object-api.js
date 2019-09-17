let obj = {
  name: 'zhh',
  age: 12
}

// Object.keys 返回对象的key的一个集合（数组）
console.log(Object.keys(obj))

// Object.values 返回对象的value的一个集合（数组）
console.log(Object.values(obj))

// [ [ 'name', 'zhh' ], [ 'age', 12 ] ]  返回一个二维数组
console.log(Object.entries(obj))

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

Object.prototype.hasOwnProperty()
console.log(newobj.hasOwnProperty('name'))
console.log(Object.prototype.hasOwnProperty.call(newobj, 'name'))
