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