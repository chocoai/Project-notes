技术栈
=================================


项目笔记 + 遇到的各种问题和处理方案
=================================

# 1.  &#x1F9EE; 项目一  adtrpt  审计报告正文自动生成

## 项目时间 2019-01-14  ----   2019-01-29

## &#x1F3A8; 项目过程
&#x1F3C5; 页面功能基本完成， 节前测试bug  节后修改bug + 维护

JavaScript+JQuery+art-template
>  1. 递归完成select下拉的动态渲染
>  2. 下载文件打开一个新的页面 并且在2s以后关闭新页面
###


# 2.  &#x1F9EE; 项目二   coffice  合并报表RPA前端重构

## 项目时间 2019-01-30  ----   2019-2-15

## &#x1F3A8; 项目过程
&#x1F3C5; 页面功能完成 布局的问题 
vue+JavaScript
>  1. 修改Vue的差值表达式的符号
###


# 3.  &#x1F9EE; 项目三   Taxation_frontend  税务系统

## 项目时间 2019-02-18  ----   2019-3-5

## &#x1F3A8; 项目过程
&#x1F3C5; vue+JavaScript+布局-媒体查询
>  1. 媒体查询+流式布局
###


# 4.  &#x1F9EE; 项目四   INDIVIDTAX_frontend  个人所得税计算

## 项目时间 2019-03-8  ----   2019-4-10

## &#x1F3A8; 项目过程
&#x1F3C5; Vue-cli, Vue-router, axios, elenemtUI, less
页面功能完成->修改了element的样式
>  1. elementUi 样式的修改-覆盖
>  2. 组件传值  父->(prope)子   子->(事件 emit)父

#  5.  &#x1F9EE; 项目五   KAMS-II  KAMS二期

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

# 6.  &#x1F9EE; 项目六   ExpM_front  费用管理

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


# 7.  &#x1F9EE; 项目七   digitalWebsite  官网、官网管理端（node）

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


# 8.  &#x1F9EE; 项目八   财报分析

## 项目时间 2019-10-14  ----  2019-10-30
## &#x1F3A8; 项目过程
&#x1F3C5; vue-cli,vue-router,Echarts,EventBus,Axios
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
      2. 右侧渲染所有 标题 + 内容  每一个标题在渲染的时候动态设定一个ID值 这个ID的值是要和tree的标题的ID对应起来的
      3. 当点击左侧tree的时候，根据获取的当前标题的ID值动态创建<a href="#id"></a>去点击，因为右侧内容在渲染的时候就动态设定了id="标题ID"，通过锚点可以自行链接找到。
      4. 给右侧内容的的父盒子（出现滚动条的那个盒子）绑定滚轮事件。
      5. 滚轮判断当前展示区域展示的盒子是哪一个标题。
      6. 左侧tree修改高亮标题

    + 代码

      + 左侧tree点击锚点链接实现
      ```js
        const a_DOM = document.createElement('a')
        a_DOM.setAttribute('href', `#${data.id}`)
        a_DOM.dispatchEvent(new MouseEvent('click'))
      ```

+ 搜索关键词的高亮和跳转（仿Vue官网的搜索）

+ element tree的修改

+ less函数的封装 使用style-resources-loader引入

+ 配置了config文件夹  打包自动清除console


# 9.  &#x1F9EE; 项目九   房地产行业纳税评估系统