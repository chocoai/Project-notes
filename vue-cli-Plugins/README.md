# vue-cli
## vue-cli jest测试

```
  npm install babel-plugin-transform-vue-jsx jest jest-serializer-vue vue-test-utils babel-jest vue-jest
```

**创建测试目录**
```
  mkdir test/unit
  cd test/unit
```

**配置启动命令**
```json
"scripts": {
  ...
  "unit": "jest --config jest.config.js --coverage"
},
```

**在根目录下创建配置文件jest.config.js**
+ 配置项
  + testMatch
  ```
    设置识别哪些文件是测试文件(glob形式)，与testRegex互斥，不能同时使用。
    testMatch: ['\*\*/\_\_tests\_\_/\*\*/\*.js?(x)', '\*\*/?(*.)(spec|test).js?(x)']
  ```
  + testRegex
  ```
    设置识别哪些文件是测试文件（正则形式），与testMatch互斥，不能同时写。
    testRegex: '(/\_\_tests\_\_).*|(\\\\.|/)(test|spec))\\\\.jsx?$'
  ```
  + testRnviroment
  ```
    测试环境，默认值是：jsdom，可修改为node
    testEnvironment: 'jsdom'
  ```
  + rootDir
  ```
    默认值：当前目录，一般是package.json所在的目录。
    rootDir: ' '
  ```
  + moduleFileExtensions
  ```
    测试文件的类型
    moduleFileExtensions: ['js','json','jsx','node']
  ```
  + 一般配置：
  ```
    module.exports = {
      testMatch: ['<rootDir>/test/\*\*/\*.js'],
      testEnvironment: 'jsdom',
      rootDir: '',
      moduleFileExtensions: ['js','json','jsx','node']
    }
  ```
+ Jest Matchers
  + Matchers俗称断言库，例如上面的expect().toBe()便是其中之一，其他常见用法如下：
  ```
    1.相等断言
      toBe(value)： 比较数字、字符串
      toEqual(value)： 比较对象、数组
      toBeNull()
      toBeUndefined()
  ```
  ```
    2.包含断言
      toHaveProperty(keyPath, value)： 是否有对应的属性
      toContain(item)： 是否包含对应的值，括号里写上数组、字符串
      toMatch(regexpOrString)： 括号里写上正则.
  ```
  ```
    3.逻辑断言
      toBeTruthy()
      toBeFalsy()
      在JavaScript中，有六个falsy值：false，0，''，null， undefined，和NaN。其他一切都是Truthy。

      toBeGreaterThan(number)： 大于
      toBeLessThan(number)： 小于
  ```
  ```
    4.not
    test('matchers',()=>{
    const a = {
      hello: 'jest',
      hi :{
        name: 'jest'
      }
    }
    const b = {
      hello: 'jest',
      hi:{
        name: 'jest'
      }
    }
    // 以下结果均为true
    expect(a).toEqual(b)
    expect([1,2,3]).toEqual([1,2,3])
    expect(null).toBeNull()
    expect([1,2,3]).toContain(1)
    expect(b).toHaveProperty('hi')
    expect('123').toContain('2')
    expect('123').toMatch(/^\d+$/)
    expect('123').not.toContain('4')
    })
  ```
## vue-cli plugins 
+ http-server
  - effect 
    ```txt
      运行打包之后的dist文件
    ```
  - Toconfig
    ```
      npm install http-server -g
    ```
  - apply
    ```
      cd dist
      http-server
    ```
+ commitizen
  - effect
    ```txt
      规范git commit
    ```
  - Toconfig
    ```
      npm install -g commitizen conventional-changelog conventional-changelog-cli conventional-commits-detector conventional-recommended-bump@0.3.0

      在.git的所在的目录执行
      commitizen init cz-conventional-changelog --save --save-exact
    ```
  - apply
    ```
      git add .
      git cz
    ```
+ nprogress
  - effect
    ```txt
      加载、切换页面，地址栏下方进度条
    ```
  - Toconfig
    ```
      npm install --save nprogress
    ```
  - apply
    ```js
      import nprogress from 'nprogress'
      import 'nprogress/nprogress.css'
      nprogress.start()
      nprogress.done()
    ```