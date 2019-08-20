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

**&#x1F381; 获取时间戳**
+ &#x1F6EB;  node 获取时间戳
```js
  // 获取时间戳
  new Date().getTime()

  // 获取时间戳 性能比上面的好
  Date.now()

  // 这种方式是根据任意取的一个过去的时间点，距离现在的时间来获取一个精确的时间戳对象：[秒, 纳秒]
  process.hrtime()

  // 此函数是通过nodejs启动运行时间来得到一个秒数时间戳，精确到毫秒 适用于高频计算时间差的场合
  process.uptime()

```

**&#x1F381; 利用管道流将前端formdata上传的文件流写入指定目录(适用于单文件，而且不能连续多次的上传，会有缓存问题)**
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
  // public/image 

  //  ../ 可以返回到上一级
```


**&#x1F381; fs.renameSync(oldPath, newPath, callback)(适合多文件上传一次性保存到本地)**
+ &#x1F6EB;  同步地将 oldPath 上的文件重命名为 newPath 提供的路径名。 如果 newPath 已存在，则覆盖它。 除了可能的异常，完成回调没有其他参数。
```js
  function fileWrite (datapaths) {
    // datapaths 上传文件的path 遍历上传的文件列表 每次调用这个函数进行保存

    // 利用时间戳命名
    let RelativeDataPath = `/${new Date().getTime()}.png`
    // 获取要保存文件的目标地址
    let dataPath = path.resolve(__dirname, '../public', '\image') + RelativeDataPath
    // 将获取的文件路径和目标路径传入 
    fs.renameSync(datapaths, dataPath, () => false)
    return RelativeDataPath
  }
```


**&#x1F381; path.join 获取路径/设置路径**
+ &#x1F6EB;  path.join
```js
  // paths string类型
  path.join(__dirname, './02art-template.js');
  // 'C:\Users\liangliang17\Desktop\Node_study\Node\5.path\02.art-template.js'

  path.join('/foo', 'bar', './baz');
  // '/foo/bar/baz'

  path.join('/foo', 'bar', '/baz', '..');
  // '/foo/bar'
```


**&#x1F381; 前后端不分离node模板引擎 express-art-template**
+ &#x1F6EB;  npm install express-art-template
```js
  // 配置模板引擎和body
  app.engine('html', require('express-art-template'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))

  // 公开第三方资源
  app.use('/public', express.static('./public'))
  app.use('/node_modules', express.static('./node_modules'))

  // 使用    默认会去views下面找文件  将aboutUser.html 返回  并且传入projectList和is_shows 两个参数
  response.render('aboutUser.html', {
    projectList: projectList.productSetup,
    is_shows: ['', '', '', 'click']
  })
```
```html
  <!-- // 在html中获取数据  并且遍历-->
  <ul class="j1_box">
    {{ each projectList}}
      <li onclick="getClick(2, 'kams')"><a href="/public/{{$value.name}}">{{ $value.name }}</a></li>
    {{ /each }}
  </ul>
```
```html
  <!-- 重复模块的使用 -->
  <!-- 比如我的header模块 -->

  <!-- 在指定的位置导入 -->
  {{include './_includes/headers.html'}}

  <!-- headers.html -->
  这个文件中只需要写公共部分的HTML  别的什么都不用写   不过模板传进来的数据也可以在这里使用
```

**&#x1F381; .get(`/public/:templateName`)动态路由获取参数**
+ &#x1F6EB;  .get(`/public/:templateName`)
```js
  // 动态路由捕获
  .get(`/public/:templateName`)
  
  // 获取动态路由的参数
  const templateName = request.params.templateName
```
