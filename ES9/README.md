> 前言
--------------------
    第9版ECMAScript标准于2018年6月发布，正式名称为ECMAScript 2018(简称ES2018)。从ES2016开始，ECMAScript规范的新版本每年发布一次，而不是每隔几年发布一次，相应的，每版增加的功能也更少一些。最新版本的标准通过添加4个新的RegExp特性、rest/spread属性、异步迭代和Promise.prototype.finally来延续每年的发布周期。此外，ES2018取消了标记模板转义序列的语法限制。
---------

> 一、Rest/Spread 特性
ES2015中添加的最有趣的特性之一是spread操作符。你可以用它替换concat()和slice()方法，使数组的操作(复制、合并)更加简单
--------
    // 复制
    const arr = [1, 2, 3]
    const copy_arr = [...arr]
    console.log(copy_arr) // [1, 2, 3]

    // 合并
    const arr2 = [4, 5, 6]
    const merge = [...arr, ...arr2]
    console.log(merge) // [1, 2, 3, 4, 5, 6]
> 在数组必须以拆解的方式作为函数参数的情况下，spread操作符也很有用。例如:
----------
    const arr = [1, 2, 3]
    console.log(..arr)  // 1 2 3
    console.log(Math.max(...arr))  // 3
>ES2018通过向对象文本添加扩展属性进一步扩展了这种语法。他可以将一个对象的属性拷贝到另一个对象上，参考以下情形
----------
    const obj = {
        a: 10,
        b: 20
    }
    const obj2 = {
        ...obj,
        c: 20
    }
    console.log(obj2)   // {a: 10, b: 20, c: 20}
--------
> 在上述代码中，spread操作符遍历obj1属性，并将其添加到obj2的属性中；而在之前的版本中，如此处理会抛出一个异常。需要注意的是，如果存在相同的属性名，只有最后一个会生效。
-------
    const obj = {
        a: 10,
        b: 20
    }
    const obj2 = {
        ...obj,
        a: 30
    }
    console.log(obj2)   // {b: 20, a: 30}