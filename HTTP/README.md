# HTTP
  + Hyper Text Transfer Protocol(超文本传输协议)
## HTTP 缓存
  + 强缓存
    ```txt
      不需要发送请求到服务端，直接读取浏览器本地缓存，在Chrome的NetWork中显示的HTTP状态码为200。
      在Chrome中，强缓存又分为Disk Cache(存放在硬盘中)和Memory Cache(存放在内存中), 存放的位置是由浏览器控制的。是否强缓存由 Expires、Cache-Control 和 Pragma 3个 Header 属性共同来控制。
    ```
    ```
      code: 200
    ```
  + 协商缓存