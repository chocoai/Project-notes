// Boolean
let isBool: boolean = true

// Number 同时支持十进制 十六进制 二进制和八进制
let isNum: number = 10
let isNum_16: number = 0xf00d
let isNum_2: number = 101101
let isNum_8: number = 0o744

// String
let isStr: string = 'abc'
let age_num: number = 32
let user: string = `Hello ${isStr}, age ${age_num}`

// Array
let list: number[] = [1, 3, 5]
// 数组泛型
let list_: Array<number> = [1, 4, 5]

// Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let x: [string, number]
x = ['hellow', 19]
// 访问一个已知索引的元素，会得到类型
console.log(x[1])
console.log(x[0].substr(0))

// enum 枚举 enum 是对JavaScript标准数据类型的一个补充 可以使用枚举类型为一组数据赋予友好的名字 默认索引从0开始
enum Color {Red, Green, Blue, }
let c: Color = Color.Red
let num: string = Color[0]

// Any 不确定类型
let any_num: any = 12
any_num = '123'
any_num = {}
let any_list: any = [1, 'zd', {}]

// 声明变量 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = null
let unus: void = undefined
// void 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnuser(): void {
  console.log('没有返回值')
}

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let u: undefined = undefined
let n: null = null

// Never
// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
function error(message: string): never {
  throw new Error(message)
}

// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。



// 类型断言
// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// 另一种为as 语法
let someValueAs: any = "this is a string";

let strLengthAs: number = (someValueAs as string).length;