# &#x1F4DA; export 和 import 用法总结

**&#x1F6A9; ES中的export的用法有两种**
  -  1. 命名导出 ( Named exports )
  -  2. 默认导出 ( Default exports)

## &#x1F449; 命名导出 (Named exports)
  **&#x1F349; 就是每一个需要输出的数据类型都要有一个name，统一输入一定要带有{}，即便只有一个需要输出的数据类型。这种写法清爽直观，是推荐的写法。导入的时候必须使用解构赋值去获取(必须使用命名时候的变量去接收)， 而且一个文件中可以多次命名导出**
  ```js
    //  lib.js
    const sqrt = Math.sqrt
    function square () {}

    export { sqrt, square }

    // main.js
    import { sqrt, square } from 'lib
  ```
  **&#x1F349; 把export直接加到声明前面就可以省略{}**
  ```js
    // lib.js
    export sqrt = Math.sqrt
    export function f1 () {}

    import { sqrt, f1 } from 'lib'
  ```
  **&#x1F349; 别名导入(Aliasing named imports) 当从不同模块导入的变量名称相同的时候**
  ```js
    import { sqr } from 'lib'     //  ×
    import { sqr } from 'grage'   //  ×

    import { sqr as kis} from 'lib'     // √
    import { sqr as mis} from 'grage'   // √
  ```
  **&#x274C; 上面的方法当输入很多的方法的时候，写法就会很繁琐**

  **&#x1F349; 解决上述问题就是使用命名空间导入了**
  ```js
    // 会将导入文件中的所有命名导出全部获取到 cow 对象中  
    import * as cow from './cow'
    import * as rol from './rol'
  ```
  
## &#x1F449; 默认导出 (Default exports)
  **&#x1F349; 默认导出就不需要name了， 但是一个js文件中能有一个export default**
  ```js
    // lib.js
    export default function () {}

    // main.js
    import fn from 'lib.js'
  ```
  **&#x1F36C; 其实这种导出方式可以看成是命名导出的变种，只不过把命名写成了default。**

  **&#x1F36C; 虽然export default只能有一个，但也可以输出多个方法。**
  ```js
    // lib.js
    export default {
      speak () {
        return 'moo'
      },
      eat () {
        return 'cow eats'
      },
      drink () {
        return 'cow drinks'
      }
    }
    // main.js
    import cow from './cow.js'
  ```
  **&#x1F36C; 如果我们在编写模块的时候使用的输出方法不统一，那么引入的时候就需要考虑不同模块输入的方式。这种麻烦可以通过自引用的方法消除。方法如下**

  **&#x1F36C; 编写两种输入方式通用的模块**
  ```js
    // lib.js
    export default myself

    export function speak () {
      console.log('moo')
    }

    // main.js  这样在导出的时候就不用考虑导入的时候是以什么方式导出了
    import * as myself from './ambidextrous-cow.js'
  ```
  **这种方法也有一个小缺点，就是在我们编写的模块中，有一个function是常用的，我们想默认输出，可export default已经使用了，而我们知道export default在一个模块中只能使用一次。这时就要使用Object.assign**
  ```js
    import * as myself from './ambidextrous-cow.js' 

    export default Object.assign(speak, myself) 

    export function speak () {
      console.log('moo')
    }
  ```