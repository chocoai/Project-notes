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