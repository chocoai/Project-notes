# [TypeScript](https://www.tslang.cn/index.html)

## [基础类型](https://www.tslang.cn/docs/handbook/basic-types.html)
- Boolean
  ```ts
    let isBool: boolean = true
  ```

- Number
  ```ts
    let isNum: number = 12
  ```

- String
  ```ts
    let isStr: string = 'abc'
  ```

- Array
  ```ts
    // Array
    let list: number[] = [1, 3, 5]
    // 数组泛型
    let list_: Array<number> = [1, 4, 5]
  ```

- Tuple
  ```ts
    // Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
    let x: [string, number]
    x = ['hellow', 19]
  ```

- enum枚举 enum 是对JavaScript标准数据类型的一个补充 可以使用枚举类型为一组数据赋予友好的名字 默认索引从0开始
  ```ts
    enum Color {Red, Green, Blue, }
    let c: Color = Color.Red
    let num: string = Color[0]
  ```

- any不确定类型
  ```ts
    let any_num: any = 12
    any_num = '123'
    any_num = {}
  ```

- void 表示没有任何类型

  - 声明变量
    ```ts
      // 声明变量 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
      let unusable: void = null
      let unus: void = undefined
    ```

  - 函数返回值
    ```ts
      // 函数返回值为void
      function warnuser(): void {
        console.log('没有返回值')
      }
    ```
- Null 和 Undefined
  ```ts
    // TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
    // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
    let u: undefined = undefined
    let n: null = null
  ```

- Never
  ```ts
    // Never
    // never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
    function error(message: string): never {
      throw new Error(message)
    } 
  ```

- Object
  ```txt
    object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
  ```

- 类型断言

  - 尖括号”语法：
    ```ts
      let someValue: any = "this is a string"

      let strLength: number = (<string>someValue).length
    ```
  - as 语法：
    ```ts
      let someValueAs: any = "this is a string"

      let strLengthAs: number = (someValueAs as string).length
    ```

## [变量声明](https://www.tslang.cn/docs/handbook/variable-declarations.html)
- let 声明
  ```txt
    当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
  ```

- const 声明
  ```txt
    被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值
  ```

- 块作用域
  ```txt
    当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
    try catch 也具有会计作用域
    特点：不能在被声明之前读或写（暂时性死区）
  ```
- 重定义及屏蔽
  ```txt
    var 可以重复定义 只会得到一个
    let 一个作用域内只能定义一个相同变量 不可以多次声明
  ```
  ```ts
    // 在一个嵌套作用域里引入一个新名字的行为称做屏蔽。 它是一把双刃剑，它可能会不小心地引入新问题，同时也可能会解决一些错误。
    function sumMatrix(matrix: number[][]) {
      let sum = 0;
      for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
          sum += currentRow[i];
        }
      }
      return sum;
    }
  ```

- 解构

    - 数组解构
      ```ts
       // 最简单的解构莫过于数组的解构赋值了：
        let input = [1, 2];
        let [first, second] = input;
        console.log(first); // outputs 1
        console.log(second); // outputs 2

        // 作用于函数参数：
        function f([first, second]: [number, number]) {
          console.log(first);
          console.log(second);
        }
        f(input);

        // 你可以在数组里使用...语法创建剩余变量：
        let [first, ...rest] = [1, 2, 3, 4];
        console.log(first); // outputs 1
        console.log(rest); // outputs [ 2, 3, 4 ]

        // 当然，由于是JavaScript, 你可以忽略你不关心的尾随元素：
        let [first] = [1, 2, 3, 4];
        console.log(first); // outputs 1
      ```

    - 对象解构
      ```ts
        // 基本用法
        let o = {
          a: "foo",
          b: 12,
          c: "bar"
        }
        let { a, b } = o
        // a -> foo
        // b -> 12

        // 你可以在对象里使用...语法创建剩余变量：
        let { a, ...passthrough } = o;
        let total = passthrough.b + passthrough.c.length;
      ```

    - 属性重命名
      ```ts
        // 你也可以给属性以不同的名字：
        let { a: newName1, b: newName2 } = o;
      ```

    - 默认值
      ```ts
        function keepWholeObject(wholeObject: { a: string, b?: number }) {
          // 默认值可以让你在属性为 undefined 时使用缺省值
          let { a, b = 1001 } = wholeObject;
        }
      ```

- 展开
  ```ts
    // 展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。 例如：
    let first = [1, 2]
    let second = [3, 4]
    let bothPlus = [0, ...first, ...second, 5]
    // 这会令bothPlus的值为[0, 1, 2, 3, 4, 5] 浅拷贝

    // 你还可以展开对象：
    // 它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性
    let defaults = { food: "spicy", price: "$$", ambiance: "noisy" }
    let search = { ...defaults, food: "rich" }
  ```