# &#x1F609; Vue-TypeScript项目工程化
## vue-cli + TS脚手架
**Axios二次封装**
- 基于TypeScript对[Axios](https://www.kancloud.cn/yunye/axios/234845)进行二次封装

## vue-cli + TS插件
**vue-bus-ts**
- [基于vue支持TypeScript的vue-bus-ts]()

- 安装
  ```
    npm i -S vue-bus-ts
  ```
- 挂载
  ```js
    import Vue from 'vue';
    import EventBus from 'vue-bus-ts';

    Vue.use(EventBus);
    var bus = new EventBus.Bus();

    new Vue({
      bus,
      render: (h) => h(App),
    }).$mount('#app')
  ```
- 使用
  ```js
    this.$bus.$emit('event_name', data) // return this result from this event

    this.$bus.$on('event_name', (parms: string) => {

    })
  ```
