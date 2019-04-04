# vue-cli3 脚手架


### 安装vue-cli
> ##### 1. 使用npm（先要有node环境）全局安装webpack, 打开命令行工具输入：`npm install webpack -g`, 安装完成之后输入`webpack -v` 验证是否安装完成
>> 当出现数字版本号的时候证明安装成功
-----------
> ##### 2. 全局安装vue-cli， 在cmd中输入命令 `npm install --global @vue/cli`, 安装完成之后输入 `vue -V` 注意这里是大写
>> 当出现对应的版本号说明安装成功
----------
> 3. 使用脚手架构建一个新项目
> * 在要创建项目的目录下打开命令行工具
> *  `vue create project_name`
## 配置项目
------------------------
 * Please pick a preset 选择项目的功能
  [default (babel, eslint)] 只有babel 和 eslint  
> * 默认设置（直接enter）
>> 非常适合快速创建一个新项目的原型，没有带任何辅助功能的 npm包

* [Manually select features] 手动配置  
> （注：空格键是选中与取消，A键是全选）
>> * [Babel]   
>> 用于编译新语法的编译器
>> * [TypeScript]   
>> 是否使用typestring编写
>> * [Progressive Web App (PWA) Support]   
>> 渐进式web应用
>> * [Router]   
>> 路由
>> * [Vuex]   
>> 中心化状态管理方案 大型项目
>> * [CSS Pre-processors]   
>> css预处理
>> * [Linter / Formatter]   
>> 选择Linter / Formatter规范类型：Pick a linter / formatter config
>> * [Unit Testing]   
>> 单元测试
>> * [E2E Testing]   
>> 端到端测试



* [Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)] 
> * History 模式

* [Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):]
> * css预处理语言

* [Pick a linter / formatter config: (Use arrow keys)]
> * 代码规范选择

* [Pick additional lint features: (Press space to select, a to toggle all, i to invert selection)]
> * Lint on save 保存就检测
> * Lint and fix on commit fix和commit时候检查

* [Where do you prefer placing config for Babel, PostCSS, ESLint, etc.] 
>  * 你要把这些东西的配置放到哪里

* [Save this as a preset for future projects? (y/N)] 
>  * 是否将此保存为将来项目的预设

* [Save preset as] 
>  * 项目文件夹名称