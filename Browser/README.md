# &#x1F6A6; 有关浏览器的知识
+ &#x1F6A9; Chrome本地文件跨域问题
  + &#x1F53B; windows
    1. 在Chrome的快捷图标上点击鼠标右键
    2. 选择属性
    3. 选择快捷方式标签
    4. 在目标里面，在原 Chrome 路径的基础上加上` --disable-web-security`
    5. 点击应用
    6. 点击确定关闭属性窗口
    7. 关闭所有已打开的 Chrome，重新启动
    
    ****** 
      注意：  --前面有个空格
      注意： 会注销当前Chrome登录的用户，需要重新登录，如果你当前Chrome设置或者标签未保存建议先保存在设置
    ******

    如果是 49 以上的版本：
    步骤和上面的一样，只是第4步的参数稍微不一样。

    `--disable-web-security --user-data-dir=D:\MyChromeDevUserData`
    
    是任意盘下的一个空文件夹 MyChromeDevUserData
