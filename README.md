技术栈
=================================


项目笔记 + 遇到的各种问题和处理方案
=================================

# 1.  🐾 项目一  adtrpt  [审计报告正文自动生成](http://ars.digital.shinewing.com)

## 项目时间 2019-01-14  ----   2019-01-29

## &#x1F3A8; 项目过程
&#x1F3C5; 页面功能基本完成， 节前测试bug  节后修改bug + 维护

JavaScript+JQuery+art-template
>  1. 递归完成select下拉的动态渲染
>  2. 下载文件打开一个新的页面 并且在2s以后关闭新页面
###


# 2.  🐾 项目二   coffice  [合并报表RPA前端重构](https://coffice.shinewingdigital.com/)

## 项目时间 2019-01-30  ----   2019-2-15

## &#x1F3A8; 项目过程
&#x1F3C5; 页面功能完成 布局的问题 
vue+JavaScript
>  1. 修改Vue的差值表达式的符号


# 3.  🐾 项目三   [Taxation_frontend  税务系统](http://ars.digital.shinewing.com)

## 项目时间 2019-02-18  ----   2019-3-5

## &#x1F3A8; 项目过程
&#x1F3C5; vue+JavaScript+布局-媒体查询
>  1. 媒体查询+流式布局


# 4.  🐾 项目四   INDIVIDTAX_frontend  [个人所得税计算](http://iit.digital.shinewing.com/)

## 项目时间 2019-03-8  ----   2019-4-10

## &#x1F3A8; 项目过程
&#x1F3C5; Vue-cli, Vue-router, axios, elenemtUI, less
页面功能完成->修改了element的样式
>  1. elementUi 样式的修改-覆盖
>  2. 组件传值  父->(prope)子   子->(事件 emit)父

#  5.  🐾 项目五   [KAMS-II](http://kams.shinewingdigital.com/)

## 项目时间 2019-04-20  ----   2019-5-10 2019-07-3  ----   2019-7-15

## &#x1F3A8; 项目过程
&#x1F3C5; Vue-cli, Vue-router, axios, elenemtUI, echarts, icon, less, mock
页面功能完成->修改了element的样式(想怎么改就怎么改)
>  1. elementUi 修改了element的样式(想怎么改就怎么改)
>  2. axios二次封装-实现了请求和业务的分离
>  3. echarts的使用，动态渲染echarts，搭配不同的主题，echarts跳转携带参数
>  4. 组件传值
>  5. icon的使用和替换
>  6. 实现了一个可以左右滚动，侧边栏不动，上下滚动，header不动的盒子 动态渲染 并且计算每一行最大高度 从而使所有的盒子都沾满
>  7. 参照github的vue-admin-template模板，重写项目目录，分配更加合理
>  8. mockjs实现数据加护

# 6.  🐾 项目六   ExpM_front  [费用管理](http://em.shinewingdigital.com/)

## 项目时间 2019-07-15  ----  2019-7-31

## &#x1F3A8; 项目过程
&#x1F3C5; vue-cli, vue-router, axios, elementUI
页面功能完成
>  1. 引入我自己定义的icon
>  2. axios的二次封装
>  3. 发开， 生产环境vue-cli不同的配置
>  4. 组件传值->ref 父组件调用子组件的方法
>  5. 手写可点选三级tree列表 实现不同tab切换状态保留
>  6. 实现动态渲染input输入记录值
>  7. 页面刷新阻止
>  8. 配置了config文件夹 通过process.env.NODE_ENV去判断是生产环境还是开发环境 然后在package.json中配置打包命令 


# 7.  🐾 项目七   digitalWebsite  官网、官网管理端（node）

## 项目时间 2019-08-15  ----  2019-8-27
## &#x1F3A8; 项目过程
&#x1F3C5; node, express, pm2 
+ 整体设计
>  1. node做后端，搭建服务，使用json存储数据
>  2. express-art-template 模板引擎 对应的接口返回模板页面
>  3. 公开第三方资源好
>  4. 配置路由和404
>  5. MVC-设计模式
>  6. json 数据的读取使用fs模块去读取 不使用require读取
>  7. json 写入 `JSON.stringify(config, null, 2) 缩颈2个字符
>  8. 文件的删除和存储
+ 接收文件并保存到指定目录，更新删除原文件
>  1. 使用formidable 去接收字段和文件
  ```js
    const formidable = require('formidable')
    const form = new formidable.IncomingForm()
    form.parse(request, function(err, fields, files) {}
    // fields字段对象
    // files 文件对象
  ```
>  2. 用时间戳作为文件名字
  ```js
    let name = `${new Date().getTime()}.png`
  ``` 
>  3. 文件写入
  ```js
    // 文件写入开始使用管道流 后来发现多文件上传写入的时候写入不完整
    // 之后使用 

    // datapaths    前端发送的文件 可以获取到一个path 
    // dataPath     文件要保存的路径
    // __dirname    当前文件所在的路径  
    // path.resolve 获取到指定路径
    let dataPath = path.resolve(__dirname, '../public', '\image') + RelativeDataPath
    fs.renameSync(datapaths, dataPath, () => false)
  ```
>  4. 文件删除
  ```js
  // 参数一是要删除的文件 这里是获取路径
    fs.unlink(path.resolve(__dirname, '../'), (err, data) => false)
  ```
+ 模板引擎的使用
>  1. 模板渲染
  ```js
    // 响应对应的模板  resObj会被传入模板渲染
    response.render('updateProductSetup.html', {
      resObj
    })
  ```
  ```html
  <!-- 模板语法 for  -->
    {{ each resObj.Carousel }}
      <div class="lb_list">
        <h1>轮播图</h1>
        <div class="center">
          <div class="imgs_box">
            <img src="{{ $value.lbbj }}" alt="" class="imgs">
            <img src="/public/image/upload.png" alt="" class="upload">
            <input type="file" name="lb{{$index}}" id="" class="files">
          </div>
          <div class="text">
            <h1>标题</h1>
            <input type="text" name="header{{$index}}" value="{{ $value.lbname }}">
            <h1>内容</h1>
            <textarea name="text{{$index}}" id="" maxlength="150">{{ $value.lbtext }}</textarea>
          </div>
        </div>
      </div>
    {{ /each }}
  ```
+  前端文件不确定数量上传，后端拿到文件保存
    + 前端
      > 前端新增轮播图时通过一个数字去保存上一个新增的索引

        ```txt
          每次新生成的input:file 都设定一个Name值，这个Name值后面加索引值

          将新建的input:file name属性通过索引赋值
          并将这个索引存到一个数组一起发送给后端
        ```
    + 后端
      > 通过获取的数组去动态获取文件

        ```txt
          将获取的文件保存本地 并更新数据文件
        ```
+  部署  pm2 
    + 进入服务器
      + ssh root@11.111.11.11
    + 生成ssh公匙
      + cd .ssh/
      + ssh-keygen  // 一路回车
      + cat id_rsa.pub  // 查看公匙 复制到代码管理工具 配置公匙
    + 安装node
      + apt install node // 
    + 安装npm 
      + apt install npm   // 
    + 安装npm淘宝镜像
      + npm install -g cnpm --registry=https://registry.npm.taobao.org  // 
    + 拉取代码
      + git clone =====================
    + 安装依赖
      + cnpm install
    + 安装pm2
      + cnpm install pm2@latest -g
    + 启动pm2 
      + pm2 start proccesses.json

+  proccesses.json
```json
  {
  "apps": [{
      "name"       : "digital",
      "script"     : "./app.js", // 入口文件
      "instances"  : "4",        // 进程数量
      "log_date_format"  : "YYYY-MM-DD",
      "exec_mode"  : "cluster_mode",
      "port"       : 10011       // 端口号
    }
  ]
}
```


# 8.  🐾 项目八   [财报分析](http://fi.shinewingdigital.com/)

## 项目时间 2019-10-14  ----  2019-10-30
## &#x1F3A8; 项目过程
&#x1F3C5; vue-cli,vue-router,Echarts,EventBus,Axios,Jest
+ echarts 样式的修改，hover的重写
  ```txt
    折线图，散点图，柱状图
    1. 对X Y 轴样式的修改 
    2. 图例的重写
    3. 背景网格样式的修改
    4. hover展示内容的重写
  ```
+ 对Axios封装的重构
  + 重构的原因

    1. 之前的axios的封装后期的使用和维护过于繁琐
    2. 业务和请求代码分离不完美
    3. 新增请求过程繁琐不易操作

  + 改进

    1. Axios引入配置requestInterceptor、responseInterceptor。
    2. responseInterceptor统一处理后端返回的错误信息并反馈给用户。
    3. 单独的抽离Axios的各种请求方式，之后使用返回调用请求方法的函数。
    4. 以分离文件夹的形式对应各个不同的不同的组件。
    5. 每个文件下一个写请求函数的文件， 一个保存每个请求URL的文件。
  
  + 优点

    1. 不同组件的请求对应不同的文件夹，便于后期的维护。
    2. 当项目体积庞大，请求很多的时候，便于清晰的找到对应组件的对应请求。
    3. 请求和业务代码完全分离，业务代码中只需要调用请求的函数即可。
    4. 每个文件分工明确，便于后期的维护和更新
    5. 一次封装，终身使用。

  + 缺点

    1. 小型项目增加了代码量

+ EventBus的使用
  + 作用: 组件通信传值
  + 创建EventBus
    ```js
     // EventBus.js
      import Vue from 'vue'
      const EventBus = new Vue()
      export default EventBus
    ```
  + 使用
    + 引入
      ```js
        import EventBus from 'EventBus'
      ```
    + 存入
      ```js
        EventBus.$emit('data', data)
      ```
    + 获取
      ```js
        EventBus.$on('data', (data) => {
          console.log(data)
        })
      ```
+ 联动锚点的实现
  + 联动锚点
    ```txt
      左侧tree结构，右侧所有内容，滚动右侧视图，左侧tree菜单自动选中当前视图中展示的区间的标题
    ```
    + 实现思路
      1. 左侧tree绑定点击事件，事件每次传入当前点击的标题的信息(id, txt)等
      2. 右侧渲染所有 标题 + 内容  每一个标题在渲染的时候动态设定一个ID值 这个ID的值是要和tree的标题的ID对应起来的,并且右侧的盒子需要首尾相接。
      3. 当点击左侧tree的时候，根据获取的当前标题的ID值动态创建<a href="#id"></a>去点击，因为右侧内容在渲染的时候就动态设定了id="标题ID"，通过锚点可以自行链接找到。
      4. 给右侧内容的的父盒子（出现滚动条的那个盒子）绑定滚轮事件。
      5. 滚轮判断当前展示区域展示的盒子是哪一个标题。
      6. 左侧tree修改高亮标题。

    + 代码

      + 左侧tree点击锚点链接实现
      ```js
        const a_DOM = document.createElement('a')
        a_DOM.setAttribute('href', `#${data.id}`)
        a_DOM.dispatchEvent(new MouseEvent('click'))
      ``` 
      + 右侧检测当前页面展示区域的盒子
      ```js
        // 获取右侧所有标题对应盒子
        // 计算所有标题盒子距离视窗上面的距离 获取最小的那个 就是当前滚动到的那个
        TitleChildList[i].getBoundingClientRect().top < 0
        // 这里通过每次计算所有盒子的位置，计算出当前在可视窗口位置的最近的盒子
        // 之后让左侧tree高亮
      ```
+ 搜索关键词的高亮和跳转（仿Vue官网的搜索）
  + 需求
    ```txt
      搜索 'A'
      搜索出来带有A的所有字段，并且A字符高亮显示，点击当前条目选中
    ```
  + 实现思路
    ```txt
      I. 获取input值，当输入值发生改变的时候去遍历data（所有数据）将含有input值的数据转存到一个新的数据中（newdata）。
      II. 在存入新数据的同时，将当前含有关键字的字符串遍历以关键字切割（split）切割之后得到一个新数组（newArr）
      III. 遍历newArr拼接成新的字符串并且数组的每一项两端都拼接 `<span style="color: red;">《切割项》</span>`
      IV. 覆盖newdata中的对饮的数据渲染
      V. 渲染使用v-html渲染 （能将字符串中拼接的span标签渲染出来）
      VI. 每次输入新的字符，都使用最开始的数据(data)去替换掉上一次搜索的数据(newdata)
      VII. 后面就是各种状态的维护
    ```
    + 技能要点
      ```txt
        v-html
      ```

+ less函数的封装 使用style-resources-loader引入
  + 封装内容
    ```less
      /*
        TODO Less function 
        GGupZhh less encapsulation
      */


      /*-------------------------------------
      ├   布局                              ┆
      └------------------------------------*/
      // 盒子宽高
      .size(@w, @h) {
        width: @w;
        height: @h;
      }

      // 最小尺寸 兼容IE
      .min-width(@min-w) {
        min-width: @min-w;
        _width: @min-w;
      }

      .min-height(@min-h) {
        min-height: @min-h;
        _height: @min-h;
      }

      // 块级元素垂直水平居中
      .v_l_cen() {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      // 文字图片居中
      .center(text-x) {
        text-align: center;
      }
      .center(text-y) {
        display: table-cell;
        vertical-align: middle;
      }



      /*-------------------------------------
      ├   字体                              ┆
      └------------------------------------*/
      // 字体大小
      .fz(@fz) { font-size: @fz; }

      // 字体大小、行高、高度
      .fz(@fz, @h, @lh: @h) { font-size: @fz; height: @h; line-height: @lh; }

      // 文本溢出省略号显示
      .ellipis() {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      // 文字样式
      .fzs(@fz, @color, @fw, @lh, @ta) {
        font-size: @fz;
        color: @color;
        font-weight: @fw;
        line-height: @lh;
        text-align: @ta;
      }
    ```
  + config配置插件全局引入
    ```js
      // vue add style-resources-loader
      
      pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, './src/style/encapsulation.less')]
        }
      }
    ```
+ 配置了config文件  打包自动清除console

  + [打包自动清除console](https://juejin.im/post/5c84b709e51d4578ca71dde4)
  + [webpack-TerserWebpackPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/#terseroptions)
    ```js
    // vue.condig.js
      module.exports = {
        configureWebpack: config => {
          // production
          if (process.env.NODE_ENV === 'production') {
            //
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
              'console.log'
            ]
          }
        }
      }
    ```
+ Jest 单元测试
  + jest.config.js
    ```js
      module.exports = {
        preset: '@vue/cli-plugin-unit-jest',
        // 测试的文件类型
        moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
        // loader configuration
        transform: {
          '^.+\\vue$': 'vue-jest',
          '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
          '^.+\\.jsx?$': 'babel-jest'
        },
        transformIgnorePatterns: ['/node_modules/'],
        // 路径映射
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1'
        },
        //快照
        snapshotSerializers: ['jest-serializer-vue'],
        testMatch: [
          '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
        ],
        // 代码覆盖率,默认是关闭的
        // collectCoverage: true,
        // collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
        // js dom 使用
        testURL: 'http://localhost/'
      }
    ```
  + 测试Dadata.vue
    ```js
      // 引入需要的api
      import { mount, createLocalVue } from '@vue/test-utils'
      //  引入组件
      import Dadata from '@/views/Dadata.vue'
      import VueRouter from 'vue-router'
      // 创建独立作用域 Vue ，避免影响全局
      const localVue = createLocalVue()
      localVue.use(VueRouter)
      // 模拟路由
      const routes = [{
        path: '/',
        name: 'index'
      }]
      const router = new VueRouter({
        routes
      })
      // 分组测试
      describe('Dadata.vue', () => {
        // 生成组件实例wrapper
        const wrapper = mount(Dadata, {
          mocks: {
            $route
          }
        })

        // 生成快照
        // 快照会保存到当前目录的__snapshots__文件下面 
        // 生成dadata.spec.js.snap文件
        it('render counter html ', () => {
          expect(wrapper.html()).toMatchSnapshot()
        })
        // it 测试
        // 两个参数，第一个是字符串，对这个测试进行描述，需要什么条件，达到什么效果。第二个是函数，函数体就是真正的测试代码
        it('create route', () => {
          // router.push 模拟路由触发并携带参数
          router.push({
            path: '/DA_data/risk',
            query: {
              code: '000001',
              year: '2012',
              category_type: '证监会行业分类'
            }
          })
        })
        // 当测试通过时， 会将注释打印到控制台
        it('title_header', () => {
          // 通过组件实例wrapper 获取组件内部定义的值headet_title
          // expect 断言方法
          // 断言  wrapper.vm.headet_title 的值 等于  '平安银行公司'
          expect(wrapper.vm.headet_title).toBe('平安银行公司')
          // vm实例中改变header_title 的值。
          wrapper.vm.headet_title = 'DOM'
          expect(wrapper.vm.headet_title).toBe('DOM')
        })
        // toBe使用 === 来测试全等于，如果我们想检查一个对象object中的值，使用toEqual来替代，toEqual递归遍历检查对象或数组里的每一个领域。
        it('item show Array', () => {
          // console.log(expect(wrapper.vm.showData))
          // expect(wrapper.vm.showData).toEqual([1, 1, 1, 1, 1, 1])
          // expect.arrayContaining(array):匹配一个测试返回的数组，它包含所有预期的元素。就是说，这个预期数组是测试返回数组的一个子集。
          expect(wrapper.vm.showData).toEqual(expect.arrayContaining([1, 1, 1, 1, 1, 1]))
          // kaggle
          expect(wrapper.vm._renderProxy.getItem(3))
          expect(wrapper.vm.showData).toEqual(expect.arrayContaining([1, 1, 1, 0, 1, 1]))
          // expect(wrapper.vm.showData).toEqual([1, 1, 1, 0, 1, 1])
        })
      })
    ```

# 9.  🐾 项目九   [房地产行业纳税评估系统](http://rti.test.shinewingdigital.com/)

## 项目时间 2019-11-16  ----  2020-01-18
## &#x1F3A8; 项目过程
&#x1F3C5; vue-cli, vue-router, Echarts, TypeScript, Axios, Element, webpack-merge, Nightwatch
+ vue-cli 工程化配置
+ webpack-merge 动态修改URL参数状态保持
+ Echarts 新增掌握的设置
+ TypeScript使用
+ Axios 简单使用
+ 数据展示部分整体的设计
+ 跳转的整体设计


# 10.  🐾 项目十   [360](http://fr360.shinewingdigital.com/login?redirect=%2F)
## 项目时间 2020-01-30  ----  2020-04-09
## &#x1F3A8; 项目过程
&#x1F3C5; vue-cli, vue-router, vue-class-component, vue-property-decorator, Vuex, vuex-class, Echarts, TypeScript,  Axios, Element, webpack-merge
+ vuex 使用
  + module 模块化
    ```js
      // store/mutation-types
      // 使用常量替代 Mutation 事件类型
      export const STATISTICS = {
        LOGIN: "login",
        LOGOUT: "logout",
        MODIFY_USERNAME: "modifyUserName",
        ADD_ROUTER: "addRouter"
      };
    ```
    ```js
      // store/modules/statistics.ts
      // 导入常量方法名
      import { STATISTICS } from "../mutation-types";
      const state: {};
      const getter: {};
      const mutations: {};
      const actions: {};
      const modules: {};
      // namespaced 带命名空间的模块
      export default {
        namespaced: true,
        state,
        getter,
        mutations,
        actions
      };
    ```
    ```js
      // store/index.ts
      import Vue from "vue";
      import Vuex from "vuex";
      // 导入指定模块
      import statistics from "./modules/statistics";

      Vue.use(Vuex);

      export default new Vuex.Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {
          statistics
        }
      })
    ```

  + vue 装饰器写法
    + [vue-class-component](https://www.jianshu.com/p/2f65e9dea4f3)
    + [vue-property-decorator](https://www.jianshu.com/p/d8ed3aa76e9b)

  + vuex-class
    - 第一种使用方法（推荐）
      ```js
        import { namespace } from "vuex-class";
        // 后面的字符串就是在vuex modules定义的模块名字
        const accountManagementModule = namespace("accountManagement");
        @accountManagementModule.State("roleChecked") roleCheckeds: boolean;
        @accountManagementModule.Mutation(STATISTICS.ACTIVE_TREE)
        activeTree!: Function;
        @accountManagementModule.Action("getCommon")
        getCommons!: Function;
      ```
    - 第二种使用方法
      ```js
        import {
          State,
          Getter,
          Action,
          Mutation,
          namespace
        } from 'vuex-class'
        const accountManagementModule = namespace("accountManagement");
        @State("roleChecked") roleCheckeds: boolean;
        @Mutation(STATISTICS.ACTIVE_TREE)
        activeTree!: Function;
        @Action("getCommon")
        getCommons!: Function;
      ```


  

  + Echarts发现新特性
    - 饼图颜色顺序
      ```js
        axisLine = {
          lineStyle: {
            color: [
              [0.2, "#91c7ae"],
              [0.8, "#63869e"],
              [1, "#c23531"],
            ]
          }
        }
        // 0-20%
        // 20%-80%
        // 80% -100%
      ```

    - 带状折线区域填充
      ```js
        思路： 利用两条线之间的形成的闭合区域去填充， 因为echarts折线填充都是以坐标轴为底线的，所以上面的填充色就是要求的颜色  下面的填充色为白色（也就是挡住） 

      ```
    - 指定点可点击绑定事件
      ```js
        // echarts实例对象绑定on("click")点击事件
        // 在实践中判断当前点击的点是否要求的点 不是就return
      ```


# 11.  🐾 项目十一   [汇算清缴SaaS服务](http://test.cits.shinewingdigital.com:3000/login)
## 项目时间 2020-07-26  ----  2020-10-09
## &#x1F3A8; 项目过程
&#x1F3C5; vue-cli, vue-router, vue-class-component, vue-property-decorator, Vuex, vuex-class, TypeScript,  Axios, Element, js-cookie, token
+ 汇算清缴 SaaS 服务
  - 介绍
    - 协助税审现场工作和报告出具的作业流程支持的系统

  - 权限类别
    - 超级管理员
    - 管理员
    - 用户

  - 权限对应功能
    - 超级管理员: 创建公司，指定公司管理员，更换公司管理员，指定公司人员数量、模板数量，新建模板，模板更新
    - 管理员: 创建项目，指定项目负责人，公司团队设置，增加、删除公司成员，生成税务鉴证报告
    - 用户：生成税务鉴证报告

+ axios.interceptors.request 实现
  ```ts
    import axios from "axios";
    import { AxiosRequestConfig, AxiosResponse } from "axios/index";
    import cookie from "js-cookie";
    axios.interceptors.request.use(
      (onFulfilled: AxiosRequestConfig) => {
        const AUTH_TOKEN = cookie.get("token");
        if (AUTH_TOKEN) {
          onFulfilled.auth = {
            username: AUTH_TOKEN,
            password: ""
          };
        } else {
          cookie.remove("token");
        }
        return onFulfilled;
      },
      (onRejected: any) => {
        Promise.reject(onRejected);
      }
    );
  ```
  
+ axios.interceptors.response 实现
  ```ts
    import axios from "axios";
    import { AxiosRequestConfig, AxiosResponse } from "axios/index";
    import cookie from "js-cookie";
    const codeMessage: any = {
      200: "服务器成功返回请求的数据。",
      201: "新建或修改数据成功。",
      202: "一个请求已经进入后台排队（异步任务）。",
      204: "删除数据成功。",
      400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
      401: "用户没有权限（令牌、用户名、密码错误）。",
      403: "用户得到授权，但是访问是被禁止的。",
      404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
      406: "请求的格式不可得。",
      410: "请求的资源被永久删除，且不会再得到的。",
      422: "当创建一个对象时，发生一个验证错误。",
      500: "服务器发生错误，请检查服务器。",
      502: "网关错误。",
      503: "服务不可用，服务器暂时过载或维护。",
      504: "网关超时。"
    };

    axios.interceptors.response.use(
      (onFulfilled: AxiosResponse) => {
        return onFulfilled;
      },
      (onRejected: any) => {
        // 判断当前是否存在 http code
        if (onRejected.response) {
          if (onRejected.response.status === 401) {
            cookie.remove("token");
            cookie.remove("roleId");
            location.reload();
          }
          return {
            data: {
              data: {},
              error: onRejected.response.status,
              msg:
                codeMessage[onRejected.response.status] ||
                onRejected.response.data.message
            }
          };
        } else {
          return {
            data: {
              data: {},
              error: 100,
              msg: "服务请求不可用，请重试或检查您的网络。"
            }
          };
        }
      }
    );
  ```

+ SlotInput 组件 实现
  ```js

  ```

+ 自定义指令（复制功能） 实现
  ```js

  ```
  
+ 团队设置拖拽功能 实现
  ```js

  ```


# 12.  🐾 项目十二   [前端中台服务](https://github.com/GGupzHH/vue-element-admin)
## 项目时间 2020-10-09 --->
## &#x1F3A8; 功能实现
