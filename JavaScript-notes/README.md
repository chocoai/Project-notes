# &#x26CF; JavaScript - API
## &#x1F4EF; Array
  + &#x1F334; join 将数组按照指定字符分割
    ```js
      // return String
      let str = arr.join(',')
    ```

  + &#x1F334; concat 合并数组 不会改变原数组
    ```js
      // return new Array
      arr1.concat(arr2)
      // or
      arr1.concat(1, 2, arr2)
    ```

  + &#x1F334; 扩展运算符合并
    ```js
      // return new Array
      let newArr = [...arr1, ...arr2]
    ```
    
  + &#x1F334; Set  去重  数组 字符串
    ```js
      // return SetObject
      let minArr = [1, 2, 3, 4, 2, 3]
      let newArr = new Set(minArr)
      // Set  返回的是Set的一个伪数组
      console.log(newArr)
      // 需要合并之后才是正产的数组
      console.log([...newArr])

      // 也可以去重字符串
      let minStr = 'abcdefgaaccssdd'
      let newStr = new Set(minStr)
      console.log(newStr)
      console.log([...newStr])
      console.log([...newStr].join())
    ```

  + &#x1F334; 栈方法 先进后出
    ```txt
      栈(Stack)是限制在表的一端进行插入和删除运算的线性表，通常称插入、删除的这一端为栈顶(Top)，另一端为栈底(Bottom)。先进后出。top= -1时为空栈，top=0只能说明栈中只有一个元素，并且元素进栈时top应该自增
    ```
    ```js
      // return Array firstItem
      arr.shift()
      // return Array.length
      arr.unshift(item)
    ```

  + &#x1F334; 队列方法 先进先出
    ```txt
      队列(Queue)也是一种运算受限的线性表。它只允许在表的一端进行插入，而在另一端进行删除。允许删除的一端称为队头(front)，允许插入的一端称为队尾(rear)。先进先出。
    ```
    ```js
      // return Array.length
      arr.push(item)
      // return Array lastItem
      arr.pop()
    ```

  + &#x1F334; splice
    ```js
      // return Array 当前删除的元素
      arr.splice(1, 1) // 从索引1开始删除  删除一个元素
      // return Array 被替换的元素 Array
      arr.splice(1, 1, 3) // 从索引1开始删除  删除一个元素 并且用另个一个元素替换
    ```

  + &#x1F334; filter 返回一个新数组 不影响原数组
    ```js
      // return newArray
      let arr = [1, 2, 3]
      let new_arr = arr.filter(item => item > 2)
      console.log(new_arr) // [3]
    ```

  + &#x1F334; find 返回数组中满足条件的第一项
    ```js
      // return ArrayItem
      let arr = [1, 2, 3]
      let firstItem = arr.find(item => item > 0)
      console.log(firstItem) // 1
    ```

  + &#x1F334; map 返回一个新数组
    ```js
      // return newArray
      let arr = [1, 2, 3]
      let newArr = arr.map(item => item + 1)
      console.log(newArr) // [2, 3, 4]
    ```

  + &#x1F334; reduce x 累加值（第一次直接拿到数组的第一项）  y 是每次传入的值
    ```js
      // return newArray
      let arr = [1, 2, 3]
      let new_reduceArr = arr.reduce((x, y) => { 
        console.log(x)
        console.log(y)
        return x + y
      })
      console.log(new_reduceArr)
      // console ->1->2->3->3->6
    ```

  + &#x1F334; reverse 反转
    ```js
      // return newArray
      let arr = [1, 2, 3]
      let newArr = arr.reverse()
      console.log(newArr) // [3, 2, 1]
    ```

  + &#x1F334; isArray 判断是否为数组
    ```js
      // return Boolean
      Array.isArray([])
    ```

  + &#x1F334; every 遍历数组 返回一个Boolean值
    ```js
      // return Boolean
      function isBigEnough(element, index, array) {
        return element >= 10;
      }
      [12, 5, 8, 130, 44].every(isBigEnough);   // false
      [12, 54, 18, 130, 44].every(isBigEnough); // true
    ```
    
## &#x1F4EF; String
  + &#x1F334; indexOf 从前往后查找字符串指定字符的索引
    ```js
      // return IndexItem
      str.indexOf('.')
    ```

  + &#x1F334; lastIndexOf 从后往前查找字符串指定字符的索引
    ```js
      // return IndexItem
      str.lastIndexOf('.')
    ```

  + &#x1F334; split 按照指定字符串切割成数组
    ```js
      // return Array
      str.split('.')
    ```

## &#x1F4EF; Object
  + &#x1F334; keys 返回对象的key的一个集合（数组）
    ```js
      // return Array
      let obj = {
        name: 'zs',
        age: 12
      }
      Object.keys(obj) // ['name', 'age']
    ```
  
  + &#x1F334; values 返回对象的value的一个集合（数组）
    ```js
      // return Array
      let obj = {
        name: 'zs',
        age: 12
      }
      Object.values(obj) // ['zs', 12]
    ```
  
  + &#x1F334; entries 返回一个二维数组
    ```js
      // return Array
      let obj = {
        name: 'zs',
        age: 12
      }
      Object.values(obj) // [['name', 'zs'], ['age', 12]]
    ```
  
  + &#x1F334; freeze 冻结一个对象
    ```js
      // return ObjectSelf
      let obj = {
        name: 'zs',
        age: 12
      }
      Object.values(obj) // obj Self
    ```
  
  + &#x1F334; ... 扩展运算符
    ```js
      // return Object
      let obj = {
        name: 'zs',
        age: 12
      }
      let newObj = {
        pages: 12,
        ...obj
      }
    ```

  + &#x1F334; hasOwnProperty 方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
    ```js
      // return Object
      let obj = {
        name: 'zs',
        age: 12
      }
      obj.hasOwnProperty('name') // true
      obj.hasOwnProperty('pages') // false
    ```

  + &#x1F334; assign 对象合并（多对象合并）返回新的对象
    ```js
      // return Object
      let obj = {
        name: 'zs',
        age: 12
      }
      let newObj = { age: 13, gender: 'male' }
      let mergeObj = Object.values(obj, newObj)
      // 合并对象 将从第二个往后的的对象合并到第一个上面， 重复的覆盖 没有的添加 原有的保留
      // assign(Obj1, obj2, obj3, ...)
      // mergeObj { name: 'zs', age: 13, gender: 'male' } 
    ```
## &#x1F4EF; Number
  + 声明二进制
    ```js
      // 十进制  7
      let a = 0b111
    ```
  + 超出32位二进制数 使用BigInt声明
    ```js
      let a = BigInt(1234567890123456789012345678901234567890)

      //为了避免超出32位 而得到完整的计算结果
      // 例:   十进制加减
      (BigInt(1234567890123456789012345678901234567890) + BigInt(1234567890123456789012345678901234567890)).toString(10)
      (1234567890123456789012345678901234567890+ 1234567890123456789012345678901234567890).toString(10)

      // 正常的计算会缺失精度 
      (BigInt('0b1001010010101010101010101010101100010101010001010101010') + BigInt('0b1001001010110011001011010100101010001010101101010')).toString(10)
      (0b1001010010101010101010101010101100010101010001010101010+ 0b1001001010110011001011010100101010001010101101010).toString(10)
    ```