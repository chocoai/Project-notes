# &#x1F9EE; npm notes

**&#x1F381; scripts字段**

+ &#x1F3A8;  scripts指定了运行脚本命令的npm命令行缩写，比如serve指定了运行npm run serve时，所要执行的命令
```json
  "scripts": {
    "serve": "supervisor app.js"
  },
```

+ &#x1F3A8; npm install -g -d -save-dev -s
```txt
  -d === --save-dev
  -d 开发环境: 会安装到devDependencies

  -s 生产环境: npm insatll -s 就是npm install --save 安装到生产环境 如 vue ,react 等

  -g 全局安装  并不会安装到node_module
```