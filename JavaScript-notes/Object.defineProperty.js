let obj = {
  name: 'zs'
}
let newObjData
//  要检测的对象    检测对象的属性    {}
Object.defineProperty(obj, 'name', {
  // 当检测对象发生改变的时候触发的函数   函数有一个参数   是当前新改变的值
  set: function (newdata) {
    newObjData = newdata
  },
  // 当获取当前监听属性值的时候触发的函数 
  // 只有get 正常返回新的改变的值  obj.name 的值才会真正的改变
  get: function () {
    return newObjData
  }
})
obj.name = 'ls'
console.log(obj.name)
