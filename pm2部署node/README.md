# &#x1F3AC; pm2 部署 node
**&#x1F4DA; 首先你得有一台服务器**
+ &#x1F6F8; 好了 你去买&#x1F47B;&#x1F47B;&#x1F47B;

**&#x1F4DA; 进入你的服务器**
+ windwo 
```txt
  用cmd 或者 Git bash
  ssh root@111.11.22.22
  <!-- 之后会提示你输入密码 -->
  <!-- 登录成功会进入到服务器系统 -->
```

**&#x1F4DA; 登录服务器，先更新一下（第一次使用服务器先更新下）**
+ Linux
```txt
  <!-- 查看当前服务器系统 -->
  uname 
  <!--  -->
  apt update
```

**&#x1F4DA; 安装Git**
+ Git
```txt
  apt install git
```

**&#x1F4DA; 生成ssh**
+ ssh
```txt
  <!-- 进入ssh文件目录 -->
  cd .ssh/
  <!-- 看下该目录下的文件 -->
  ls
  <!-- 生成ssh   一路回车 -->
  ssh-keygen
  <!-- 查看 id_rsa.pub 密匙-->
  cat id_rsa.pub
  <!-- 之后添加ssh密匙 -->
```

**&#x1F4DA; 安装node**
+ node
```txt
  apt install node
  <!-- 查看node版本 -->
  node -v
```

**&#x1F4DA; 安装npm**
+ npm
```txt
  apt install npm
  <!-- 查看npm版本 -->
  npm -v
```


**&#x1F4DA; 安装pm2**
+ pm2
```txt
  npm install pm2@latest -g
```
+ 创建软链接，使pm2命令全局有效
```txt
  ln -s /root/node-v8.9.3-linux-x64/bin/pm2 /usr/local/bin/pm2
```

**&#x1F4DA; pm2的配置**
+ 配置 processes.json
```json
// 新手配置 请多指教
  {
  "apps": [{
      "name"       : "digital",
      "script"     : "./app.js",
      "instances"  : "4",
      "log_date_format"  : "YYYY-MM-DD",
      "exec_mode"  : "cluster_mode",
      "port"       : 10011
    }
  ]
}
```

**&#x1F4DA; 拉取代码-启动项目**
+ 拉取代码-启动项目
```txt
  git clone ***********
  <!-- 将线上的dev同步到本地 -->
  git checkout -b dev origin/dev
  <!-- 安装项目依赖 -->
  npm install
  <!-- 启动项目 -->
  pm2 start processes.json
  <!-- 最后要到你服务器后台管理系统将对应的端口号权限打开  -->
```

