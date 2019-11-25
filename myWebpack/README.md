## webpack安装
- 安装本地的webpack
- webpack + webpack-cli -D
- -D 本地使用 上线的时候不需要这两个包

## webpack 可以0配置
- 打包工具 源码打包-》 输出后的结果（js模块）

- 打包（支持js的模块化）查找所有的依赖的文件 然后打包成可以直接用的代码

## 手动配置webpack
- 默认配置文件名字是 webpack.config.js or webpackfile.js
- 可以修改webpack配置文件名称 目录在node_modules>webpack-cli>bin>config>config.yargs.js
- 或者直接设置别的名称的配置文件 执行命令使用 npx webpack --config 配置文件名
- 或者npm run build -- --config webpack.config.my.js 
  -  package.json -> script -> "build": "webpack"
  -  --后面的会被识别成参数传入 