# &#x1F3A8; node Notes

**&#x1F381;  Thermal Renewal**

+ &#x1F6EB;  node Thermal Renewal
```txt
  npm install supervisor
  用supervisor 去执行要热更新的文件
```
+ &#x1F6EB;  package.json中设置npm命令
```json
  "scripts": {
    "serve": "supervisor app.js"
  },
```
**&#x1F381;  body-parser 将请求体转换成可以获取的内容**
+ &#x1F6EB;  npm install
```txt 
  npm install body-parser
```
+ &#x1F6EB;  app.js
```js 
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
```
