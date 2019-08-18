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
**&#x1F381; formidable 获取上传文件**
+ &#x1F6EB;  npm install formidable
```js
  const formidable = require('formidable')
  module.exports = (request, response, err) => {
    console.log(request.body)
    var form = new formidable.IncomingForm()
    form.parse(request, function(err, fields, files) {
      console.log(fields)
      console.log(files)
      new Date().getTime()
    })
  }
```

**&#x1F381; new Date().getTime() 获取时间戳**
+ &#x1F6EB;  new Date().getTime()
```js
  new Date().getTime()
```

**&#x1F381; 利用管道流将前端formdata上传的文件流写入指定目录**
+ &#x1F6EB;  Stream
```js
  const formidable = require('formidable')
  const path = require('path)
  module.exports = (request, response, err) => {
    var form = new formidable.IncomingForm()
    form.parse(request, function(err, fields, files) {
      // files 是上传的文件列表

      // 设置保存路径   
      // __dirname 当前文件所在的目录
      // ${new Date().getTime()}  设置时间戳作为文件的名字
      let dataPath = path.resolve(__dirname, '../public/image/') + `${new Date().getTime()}` + '.png'

      // 创建可读流
      let newRead = fs.createReadStream(files.file_bj.path)
      // 创建可写流
      let newWrite = fs.createWriteStream(dataPath)
      // 利用管道写入文件
      newRead.pipe(newWrite)
    })
  }
```

**&#x1F381; path.resolve 获取路径/设置路径**
+ &#x1F6EB;  path.resolve
```js
  path.resolve('bar', 'baz', 'foo')
  // 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path\bar\baz\foo'

  // 这样的路径就是就会到image文件夹下面
  let dataPath = path.resolve(__dirname, '../public', '\image') + `/${new Date().getTime()}` + '.png'
  public/image 
```


