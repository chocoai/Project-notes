# [ &#x1F3E7; TypeScript &#x1F3E7; ](https://www.tslang.cn/index.html)

## [ &#x1F6A9; 基础类型](https://www.tslang.cn/docs/handbook/basic-types.html)
- &#x1F3F9; Boolean
  ```ts
    let isBool: boolean = true
  ```

- &#x1F3F9; Number
  ```ts
    let isNum: number = 12
  ```

- &#x1F3F9; String
  ```ts
    let isStr: string = 'abc'
  ```

- &#x1F3F9; Array
  ```ts
    // Array
    let list: number[] = [1, 3, 5]
    // 数组泛型
    let list_: Array<number> = [1, 4, 5]
  ```

- &#x1F3F9; Tuple
  ```ts
    // Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
    let x: [string, number]
    x = ['hellow', 19]
  ```

- &#x1F3F9; enum枚举 enum 是对JavaScript标准数据类型的一个补充 可以使用枚举类型为一组数据赋予友好的名字 默认索引从0开始
  ```ts
    enum Color {Red, Green, Blue, }
    let c: Color = Color.Red
    let num: string = Color[0]
  ```

- &#x1F3F9; any不确定类型
  ```ts
    let any_num: any = 12
    any_num = '123'
    any_num = {}
  ```

- &#x1F3F9; void 表示没有任何类型

  - &#x1F373; 声明变量
    ```ts
      // 声明变量 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
      let unusable: void = null
      let unus: void = undefined
    ```

  - &#x1F373; 函数返回值
    ```ts
      // 函数返回值为void
      function warnuser(): void {
        console.log('没有返回值')
      }
    ```
- &#x1F3F9; Null 和 Undefined
  ```ts
    // TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
    // 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
    let u: undefined = undefined
    let n: null = null
  ```

- &#x1F3F9; Never
  ```ts
    // Never
    // never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
    function error(message: string): never {
      throw new Error(message)
    } 
  ```

- &#x1F3F9; Object
  ```txt
    object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
  ```

- &#x1F3F9; 类型断言

  - &#x1F373; 尖括号”语法：
    ```ts
      let someValue: any = "this is a string"

      let strLength: number = (<string>someValue).length
    ```
  - &#x1F373; as 语法：
    ```ts
      let someValueAs: any = "this is a string"

      let strLengthAs: number = (someValueAs as string).length
    ```

## [ &#x1F6A9; 变量声明](https://www.tslang.cn/docs/handbook/variable-declarations.html)
- &#x1F342; let 声明
  ```txt
    当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
  ```

- &#x1F342; const 声明
  ```txt
    被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值
  ```

- &#x1F342; 块作用域
  ```txt
    当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
    try catch 也具有会计作用域
    特点：不能在被声明之前读或写（暂时性死区）
  ```
- &#x1F342; 重定义及屏蔽
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

- &#x1F342; 解构

    - &#x1F964; 数组解构
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

    - &#x1F964; 对象解构
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

    - &#x1F964; 属性重命名
      ```ts
        // 你也可以给属性以不同的名字：
        let { a: newName1, b: newName2 } = o;
      ```

    - &#x1F964; 默认值
      ```ts
        function keepWholeObject(wholeObject: { a: string, b?: number }) {
          // 默认值可以让你在属性为 undefined 时使用缺省值
          let { a, b = 1001 } = wholeObject;
        }
      ```

- &#x1F342; 展开
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

## [ &#x1F6A9; 接口](https://www.tslang.cn/docs/handbook/interfaces.html)
- 介绍
  ```txt
    TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
  ```
- 接口初探
  ```ts
    // 接口要求传入的参数需要有一个label属性 并且是string 类型的
    interface LabelledValue {
      label: string
    }

    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj)
  ```

- 可选属性
  ```ts
    // 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
    // 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
    interface SquareConfig {
      color?: string
      width?: number
    }

    function createSquare(config: SquareConfig): {color: string; area: number} {
      let newSquare = {color: "white", area: 100}
      if (config.color) {
        newSquare.color = config.color
      }
      if (config.width) {
        newSquare.area = config.width * config.width
      }
      return newSquare;
    }

    let mySquare = createSquare({color: "black"})
  ```

- 只读属性
  ```ts
    // 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
    interface Point {
      readonly x: number
      readonly y: number
    }
    // 你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
    let p1: Point = { x: 10, y: 20 };
    p1.x = 5; // error!

    // TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    ro[0] = 12; // error!
    ro.push(5); // error!
    ro.length = 100; // error!
    a = ro; // error!

    // 上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
    a = ro as number[];

  ```

- 额外的属性检查
  ```ts
    // 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

    // 如果 SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
    interface SquareConfig {
      color?: string;
      width?: number;
      [propName: string]: any;
    }
  ```

- 函数类型
  ```ts
    // 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
    interface SearchFunc {
      (source: string, subString: string): boolean;
    }
  ```
- 可索引的类型
  ```ts
    interface StringArray {
      [index: number]: string
    }

    let myArray: StringArray
    myArray = ["Bob", "Fred"]

    let myStr: string = myArray[0]
  ```
- 类类型
  - 实现接口
    ```ts
      interface ClockInterface {
        currentTime: Date
      }

      class Clock implements ClockInterface {
        currentTime: Date
        constructor(h: number, m: number) { }
      }

      interface ClockInterface {
        currentTime: Date
        setTime(d: Date)
      }

      class Clock implements ClockInterface {
        currentTime: Date
        setTime(d: Date) {
            this.currentTime = d
        }
        constructor(h: number, m: number) { }
      }
    ```

  - 类静态部分与实例部分的区别
    ```ts
      
    ```
- 继承接口
  ```ts
    interface Shape {
      color: string
    }

    interface Square extends Shape {
      sideLength: number
    }
    let square = <Square>{}
    square.color = "blue"
    square.sideLength = 10

    // 一个接口可以继承多个接口 常见出多个接口的合成接口
    interface Shape {
      color: string
    }

    interface PenStroke {
      penWidth: number
    }

    interface Square extends Shape, PenStroke {
      sideLength: number
    }

    let square = <Square>{}
    square.color = "blue"
    square.sideLength = 10
    square.penWidth = 5.0
  ```
- 混合类型
  ```ts

  ```
- 接口继承类
  - 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
  ```ts
    class Control {
      private state: any
    }

    interface SelectableControl extends Control {
      select(): void
    }

    class Button extends Control implements SelectableControl {
      select() { }
    }

    class TextBox extends Control {
      select() { }
    }

    // 错误：“Image”类型缺少“state”属性。
    class Image implements SelectableControl {
      select() { }
    }
  ```

## [ &#x1F6A9; 类](https://www.tslang.cn/docs/handbook/classes.html)
- 介绍
- 类
- 继承
- 公共，私有与受保护的修饰符
  - public
  - private
  - protected
  - readonly
  - 参数属性
- 存取器
- 静态属性
- 抽象类
- 高级技巧
  - 构造函数
  - 把类当做接口使用

## [ &#x1F6A9; 函数](https://www.tslang.cn/docs/handbook/functions.html)
- 介绍
- 函数
- 函数类型
  - 为函数定义类型
  - 书写完整函数类型
  - 推断类型
- 可选参数和默认参数
- 剩余参数
- this
  - this和箭头函数
  - this参数
  - this参数在回调函数里
- 重载