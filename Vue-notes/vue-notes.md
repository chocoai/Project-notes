# vue 笔记

## watch
```js
watch: {
  a: function () {
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    }
  }
}
```

## 样式穿透
  - css
    ```css
      /* css 样式穿透  scoped*/
      /* 引入第三方组件 class="sw-loading" */
      /* 本组件最外层盒子 class="company-wrapper" */
      .company-wrapper >>> .sw-loading {
        background-color: #fff;
      }
    ```
  -less/sass
    ```less
      /* css 样式穿透  scoped*/
      /* 引入第三方组件 class="sw-loading" */
      /* 本组件最外层盒子 class="company-wrapper" */
      .company-wrapper /deep/ .sw-loading {
        background-color: #fff;
      }
    ```
## this.$router.push 和 this.$router.replace 区别
  + history模式
    + this.$router.push
      ```txt
        这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL
      ```

    + this.$router.replace
      ```txt
        不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
      ```

## this.$router.go()
  + history模式
    + go(1)
      ```txt
        在浏览器记录中前进一步，等同于 history.forward()
      ```
    + go(-1)
      ```txt
        后退一步记录，等同于 history.back()
      ```
    + go(100)
      ```txt
        如果 history 记录不够用，那就默默地失败呗
      ```