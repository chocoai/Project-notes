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
