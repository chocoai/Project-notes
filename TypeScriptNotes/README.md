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

    let arr:Array<number> = []
    let arr:Array<string> = []
    let newArr: Array<Array<number>> = []

    interface InewObj {
      name: string,
      age: number
    }
    let newObj: InewObj[]
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
  ```ts
  传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。
  ```
- 类
  ```ts
    class Greeter {
      greeting: string;
      constructor(message: string) {
        this.greeting = message;
      }
      greet() {
      return "Hello, " + this.greeting;
      }
    }
    let greeter = new Greeter("world");
  ```
  ```txt
    如果你使用过C#或Java，你会对这种语法非常熟悉。 我们声明一个 Greeter类。这个类有3个成员：一个叫做 greeting的属性，一个构造函数和一个 greet方法。

    你会注意到，我们在引用任何一个类成员的时候都用了 this。 它表示我们访问的是类的成员。

    最后一行，我们使用 new构造了 Greeter类的一个实例。 它会调用之前定义的构造函数，创建一个 Greeter类型的新对象，并执行构造函数初始化它。
  ```
- 继承
  ```ts
    class Animal {
      name: string;
      constructor(theName: string) { this.name = theName; }
      move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
      }
    }

    class Snake extends Animal {
      constructor(name: string) { super(name); }
      move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
      }
    }

    class Horse extends Animal {
      constructor(name: string) { super(name); }
      move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
      }
    }

    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);
  ```
  ```txt
    这个例子展示了一些上面没有提到的特性。 这一次，我们使用 extends关键字创建了 Animal的两个子类： Horse和 Snake。

    与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。

    这个例子演示了如何在子类里可以重写父类的方法。 Snake类和 Horse类都创建了 move方法，它们重写了从 Animal继承来的 move方法，使得 move方法根据不同的类而具有不同的功能。 注意，即使 tom被声明为 Animal类型，但因为它的值是 Horse，调用 tom.move(34)时，它会调用 Horse里重写的方法
  ```
- 公共，私有与受保护的修饰符
  - public
    ```txt
      在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public来做修饰；例如，C#要求必须明确地使用 public指定成员是可见的。 在TypeScript里，成员都默认为 public。
    ```
  - private
    ```txt
      当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：
    ```
    ```ts
      class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
      }

      new Animal("Cat").name; // 错误: 'name' 是私有的.
    ```
  - protected
    ```txt
      protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
    ```
    ```ts
      class Person {
        protected name: string
        constructor(name: string) this.name = name
      }
      class Emply extends Person {
        private devname:string
        constructor(name:string) {
          super(name)
          this.devname = name
        }
      }
      let emply = new Emply('zs')
      //注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
    ```
    ```txt
      构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
    ```
    ```ts
      class Person {
        protected name: string;
        protected constructor(theName: string) { this.name = theName; }
      }

      // Employee 能够继承 Person
      class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
          super(name);
          this.department = department;
        }

        public getElevatorPitch() {
          return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
      }

      let howard = new Employee("Howard", "Sales");
      let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
    ```
  - readonly
    ```txt
      你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
    ```
    ```ts
      class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor (theName: string) {
          this.name = theName;
        }
      }
      let dad = new Octopus("Man with the 8 strong legs");
      dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
    ```
  - 参数属性
    ```ts
      // 就是制度属性的默认值
      class Octopus {
        readonly numberOfLegs: number = 8;
      }
      let a = new Octopus()
      console.log(a)
    ```
- 存取器
  ```txt
    TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
  ```
- 静态属性
  ```txt
    到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 origin前面加上类名。 如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
  ```
  ```ts
    class Grid {
      static origin = {x: 0, y: 0};
      calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
      }
      constructor (public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
  ```
- 抽象类
  ```txt
    抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
  ```
  ```ts
    abstract class Animal {
      abstract makeSound(): void;
      move(): void {
        console.log('roaming the earch...');
      }
    }
  ```
  ```ts
    抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。也就是定义了可以重写的方法名
  ```
  ```ts
    abstract class Department {

      constructor(public name: string) {
      }

      printName(): void {
        console.log('Department name: ' + this.name);
      }

      abstract printMeeting(): void; // 必须在派生类中实现
    }

    class AccountingDepartment extends Department {

        constructor() {
            super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
        }

        printMeeting(): void {
            console.log('The Accounting Department meets each Monday at 10am.');
        }

        generateReports(): void {
            console.log('Generating accounting reports...');
        }
    }

    let department: Department; // 允许创建一个对抽象类型的引用
    // department = new Department(); // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
    // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
    // 因为department是抽象类的引用 所以不存在派生类的方法的
    // 要想使用派生类中的方法需要重新new一个实例出来调用
  ```
- 高级技巧
  - 构造函数
    ```ts
      class Greeter {
        static standardGreeting = "Hello, there";
        greeting: string;
        greet() {
          if (this.greeting) {
            return "Hello, " + this.greeting;
          }
          else {
            return Greeter.standardGreeting;
          }
        }
      }

      let greeter1: Greeter;
      greeter1 = new Greeter();
      console.log(greeter1.greet());

      let greeterMaker: typeof Greeter = Greeter;
      greeterMaker.standardGreeting = "Hey there!";

      let greeter2: Greeter = new greeterMaker();
      console.log(greeter2.greet());
    ```
  - 把类当做接口使用
    ```ts
      class Point {
        x: number;
        y: number;
      }

      interface Point3d extends Point {
        z: number;
      }

      let point3d: Point3d = {x: 1, y: 2, z: 3};
    ```

## [ &#x1F6A9; 函数](https://www.tslang.cn/docs/handbook/functions.html)
- 介绍
  ```txt
    函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用。
  ```
- 函数
  ```txt
    和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。

    通过下面的例子可以迅速回想起这两种JavaScript中的函数：
  ```
  ```ts
    // Named function 命名函数
    function add(x, y) {
      return x + y;
    }

    // Anonymous function 匿名函数
    let myAdd = function(x, y) { return x + y; };
  ```
- 函数类型
  - 为函数定义类型
    ```ts
      // 让我们为上面那个函数添加类型：
      function add(x: number, y: number): number {
        return x + y;
      }

      let myAdd = function(x: number, y: number): number { return x + y; };
      // 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
    ```
  - 书写完整函数类型
    ```ts
      // 现在我们已经为函数指定了类型，下面让我们写出函数的完整类型。
      // (x: number, y: number) => number  就是函数的类型
      let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { 
        return x + y; 
      };
 
      // 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：
      let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number { 
        return x + y; 
      };
      // 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
      // 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
      // 函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。
    ```
  - 推断类型
    ```txt
      尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
    ```
    ```ts
      // myAdd has the full function type
      let myAdd = function(x: number, y: number): number { return x + y; };
      // 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
    ```
- 可选参数和默认参数
  ```txt
    TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
  ```
  ```ts
    function buildName(firstName: string, lastName: string) {
      return firstName + " " + lastName;
    }

    let result1 = buildName("Bob");                  // error, too few parameters
    let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName("Bob", "Adams");         // ah, just right
  ```
  ```txt
    JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：
  ```
  ```ts
    function buildName(firstName: string, lastName?: string) {
      if (lastName)
        return firstName + " " + lastName;
      else
        return firstName;
    }

    let result1 = buildName("Bob");  // works correctly now
    let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName("Bob", "Adams");  // ah, just right
    // 可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。 也就是说可选的参数要放到别的参数的后面
  ```
- 默认初始化值的参数
  ```txt
    在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为"Smith"。
  ```
  ```ts
    function buildName(firstName: string, lastName = "Smith") {
      return firstName + " " + lastName;
    }

    let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
    let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
    let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result4 = buildName("Bob", "Adams");         // ah, just right
    // 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。
  ```
  ```txt
    与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
  ```
  ```ts
    function buildName(firstName = "Will", lastName: string) {
      return firstName + " " + lastName;
    }

    let result1 = buildName("Bob");                  // error, too few parameters
    let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
    let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
  ```
- 剩余参数
  ```txt
    必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。
  ```
  ```ts
    // 在TypeScript里，你可以把所有参数收集到一个变量里：
    function buildName(firstName: string, ...restOfName: string[]) {
      return firstName + " " + restOfName.join(" ");
    }

    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
    // 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
  ```
- 重载
  ```
    JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。
  ```
  ```ts
    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard(x: {suit: string; card: number; }[]): number;
    function pickCard(x: number): {suit: string; card: number; };
    function pickCard(x): any {
      // Check to see if we're working with an object/array
      // if so, they gave us the deck and we'll pick the card
      if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
      }
      // Otherwise just let them pick the card
      else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
      }
    }

    let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    let pickedCard2 = pickCard(15);
    alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    // 这样改变后，重载的pickCard函数在调用的时候会进行正确的类型检查。
    // 为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。
    // 注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
  ```
## [ &#x1F6A9; 泛型](https://www.tslang.cn/docs/handbook/generics.html)
- 介绍
  ```txt
    软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

    在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
  ```
- 泛型之Hello World
  ```txt
    下面来创建第一个使用泛型的例子：identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。
  ```
  ```ts
    // 不用泛型的话，这个函数可能是下面这样：
    function identity(arg: number): number {
      return arg;
    }
    // 或者，我们使用any类型来定义函数：
    function identity(arg: any): any {
      return arg;
    }
  ```
  ```txt
    使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
    因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值.
  ```
  ```ts
    function identity<T>(arg: T): T {
      return arg;
    }
    // 我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。
    // 我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。
  ```
  ```txt
    我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：
  ```
  ```ts
    let output = identity<string>("myString");  // type of output will be 'string'
    // 这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()。
  ```
  ```txt
    第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
  ```
  ```ts
    let output = identity("myString");  // type of output will be 'string'
    // 注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。
  ```
- 使用泛型变量
  ```txt
    使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。
  ```
  ```ts
    // 看下之前identity例子：
    function identity<T>(arg: T): T {
      return arg;
    }
    // 如果我们想同时打印出arg的长度。 我们很可能会这样做：
    function identity<T>(arg: T): T {
      console.log(arg.length);  // Error: T doesn't have .length
      return arg;
    }
    // 如果这么做，编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。
    // 现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：
    function loggingIdentity<T>(arg: T[]): T[] {
      console.log(arg.length);  // Array has a .length, so no more error
      return arg;
    }
    // -----这样使用传入的只能是一个数组
  ```
- 泛型类型
  ```txt
    上一节，我们创建了identity通用函数，可以适用于不同的类型。 在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。
  ```
  ```ts
    // 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
    function identity<T>(arg: T): T {
      return arg;
    }

    let myIdentity: <T>(arg: T) => T = identity;

    // 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
    function identity<T>(arg: T): T {
      return arg;
    }

    let myIdentity: {<T>(arg: T): T} = identity;

    // 这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：
    interface GenericIdentityFn {
      <T>(arg: T): T;
    }

    function identity<T>(arg: T): T {
      return arg;
    }

    let myIdentity: GenericIdentityFn = identity;
  ```
  ```txt
    一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）。 这样接口里的其它成员也能知道这个参数的类型了。
  ```
  ```ts
    interface GenericIdentityFn<T> {
      (arg: T): T;
    }

    function identity<T>(arg: T): T {
      return arg;
    }

    let myIdentity: GenericIdentityFn<number> = identity;
    // 注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型（这里是：number），锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。
  ```
- 泛型类
  ```txt
    泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
  ```
  ```ts
    class GenericNumber<T> {
      zeroValue: T;
      add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };
    // GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用number类型。 也可以使用字符串或其它更复杂的类型。

    // 与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。

    // 我们在类那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

  ```
- 泛型约束
  ```txt
    你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。
  ```
  ```ts
    function loggingIdentity<T>(arg: T): T {
      console.log(arg.length);  // Error: T doesn't have .length
      return arg;
    }

    // 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。

    // 为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：

    interface Lengthwise {
      length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);  // Now we know it has a .length property, so no more error
      return arg;
    }

    // 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
    loggingIdentity(3);  // Error, number doesn't have a .length property

    // 我们需要传入符合约束类型的值，必须包含必须的属性：
    loggingIdentity({length: 10, value: 3});
  ```
  - 在泛型约束中使用类型参数
    ```txt
      你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束。
    ```
    ```ts
      function getProperty(obj: T, key: K) {
        return obj[key];
      }

      let x = { a: 1, b: 2, c: 3, d: 4 };

      getProperty(x, "a"); // okay
      getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    ```
  - 在泛型里使用类类型
    ```txt
      在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
    ```
    ```ts
      function create<T>(c: {new(): T; }): T {
        return new c();
      }
    ```
    ```ts
      // 一个更高级的例子   没有看懂
      class BeeKeeper {
        hasMask: boolean;
      }

      class ZooKeeper {
        nametag: string;
      }

      class Animal {
        numLegs: number;
      }

      class Bee extends Animal {
        keeper: BeeKeeper;
      }

      class Lion extends Animal {
        keeper: ZooKeeper;
      }

      function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
      }

      createInstance(Lion).keeper.nametag;  // typechecks!
      createInstance(Bee).keeper.hasMask;   // typechecks!
    ```

## [ &#x1F6A9; 枚举](https://www.tslang.cn/docs/handbook/enums.html)
- 枚举
  ```txt
    使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
  ```
- 数字枚举
  - 首先我们看看数字枚举，如果你使用过其它编程语言应该会很熟悉。
    ```ts
      enum Direction {
        Up = 1,
        Down,
        Left,
        Right
      }
      // 如上，我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
    ```
  - 我们还可以完全不使用初始化器：
    ```ts
      enum Direction {
        Up,
        Down,
        Left,
        Right,
      }
      // 现在， Up的值为 0， Down的值为 1等等。 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，但是要注意每个枚举成员的值都是不同的。
    ```
  - 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
    ```ts
      enum Response {
        No = 0,
        Yes = 1,
      }

      function respond(recipient: string, message: Response): void {
        // ...
      }

      respond("Princess Caroline", Response.Yes)
    ```
  - 字符串枚举
    - 字符串枚举的概念很简单，但是有细微的 运行时的差别。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
      ```ts
        enum Direction {
          Up = "UP",
          Down = "DOWN",
          Left = "LEFT",
          Right = "RIGHT",
        }
        // 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
      ```
  - 异构枚举（Heterogeneous enums）
    - 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
      ```ts
        enum BooleanLikeHeterogeneousEnum {
          No = 0,
          Yes = "YES",
        }
        // 不建议这样做。
      ```
  - 反向映射
    - 除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。 例如，在下面的例子中：
      ```ts
        enum Enum {
          A
        }
        let a = Enum.A;
        let nameOfA = Enum[a]; // "A"
      ```
  - const枚举
    - 大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义。
      ```ts
        const enum Enum {
          A = 1,
          B = A * 2
        }
      ```
    - 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。
      ```ts
        const enum Directions {
          Up,
          Down,
          Left,
          Right
        }

        let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
        // 生成后的代码为：
        var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
      ```
  - 外部枚举
    - 外部枚举用来描述已经存在的枚举类型的形状。
      ```ts
        declare enum Enum {
          A = 1,
          B,
          C = 2
        }
        // 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
      ```
## [ &#x1F6A9; 类型推论](https://www.tslang.cn/docs/handbook/type-inference.html)
- 介绍
  ```txt
    这节介绍TypeScript里的类型推论。即，类型是在哪里如何被推断的。
  ```
  - 基础
    - TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。如下面的例子
      ```ts
        let x = 3;
        // 变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。
      ```
  - 最佳通用类型
    - 当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型。例如，
      ```ts
        let x = [0, 1, null];
        // 为了推断x的类型，我们必须考虑所有元素的类型。 这里有两种选择： number和null。 计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。
      ```
    - 由于最终的通用类型取自候选类型，有些时候候选类型共享相同的通用类型，但是却没有一个类型能做为所有候选类型的类型。例如：
      ```ts
        let zoo = [new Rhino(), new Elephant(), new Snake()];
      ```
      - 这里，我们想让zoo被推断为Animal[]类型，但是这个数组里没有对象是Animal类型的，因此不能推断出这个结果。 为了更正，当候选类型不能使用的时候我们需要明确的指出类型：
      ```ts
        let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
      ```
      - 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，(Rhino | Elephant | Snake)[]。
  - 上下文类型
    - TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处的位置相关时。比如：
      ```ts
        window.onmousedown = function(mouseEvent) {
          console.log(mouseEvent.button);  //<- Error
        };
        // 这个例子会得到一个类型错误，TypeScript类型检查器使用Window.onmousedown函数的类型来推断右边函数表达式的类型。 因此，就能推断出 mouseEvent参数的类型了。 如果函数表达式不是在上下文类型的位置， mouseEvent参数的类型需要指定为any，这样也不会报错了。
      ```
## [ &#x1F6A9; 类型兼容性](https://www.tslang.cn/docs/handbook/type-compatibility.html)
- 介绍
  ```ts
    TypeScript里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。 它正好与名义（nominal）类型形成对比。
  ```
  - 开始
    - TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性。比如：
      ```ts
        interface Named {
          name: string;
        }

        let x: Named;
        // y's inferred type is { name: string; location: string; }
        let y = { name: 'Alice', location: 'Seattle' };
        x = y;
        // 这里要检查y是否能赋值给x，编译器检查x中的每个属性，看是否能在y中也找到对应属性。 在这个例子中，y必须包含名字是name的string类型成员。y满足条件，因此赋值正确。
      ```
    - 检查函数参数时使用相同的规则：
      ```ts
        function greet(n: Named) {
          console.log('Hello, ' + n.name);
        }
        greet(y); // OK
        // 注意，y有个额外的location属性，但这不会引发错误。 只有目标类型（这里是Named）的成员会被一一检查是否兼容。
        // 这个比较过程是递归进行的，检查每个成员及子成员。
      ```
  - 比较两个函数
    - 相对来讲，在比较原始类型和对象类型的时候是比较容易理解的，问题是如何判断两个函数是兼容的。 下面我们从两个简单的函数入手，它们仅是参数列表略有不同：
      ```ts
        let x = (a: number) => 0;
        let y = (b: number, s: string) => 0;

        y = x; // OK
        x = y; // Error
        // 要查看x是否能赋值给y，首先看它们的参数列表。 x的每个参数必须能在y里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。 这里，x的每个参数在y中都能找到对应的参数，所以允许赋值。
        // 第二个赋值错误，因为y有个必需的第二个参数，但是x并没有，所以不允许赋值。
      ```
    - 函数重载
      - 对于有重载的函数，源函数的每个重载都要在目标函数上找到对应的函数签名。 这确保了目标函数可以在所有源函数可调用的地方调用。
  - 枚举
    - 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如，
      ```ts
        enum Status { Ready, Waiting };
        enum Color { Red, Blue, Green };

        let status = Status.Ready;
        status = Color.Green;  // Error
      ```