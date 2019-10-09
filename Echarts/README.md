# &#x1F3AC; Echarts 各种配置
**&#x1F4DA; 横坐标 xAxis**
+ name(String)
```txt
  坐标轴名称
```
+ alignWithLabel(boolean)
```txt
  刻度线和标签对齐方式
```

**&#x1F4DA; 纵坐标 yAxis**
+ name()
```txt
  刻度线和标签对齐方式
```
**&#x1F4DA; 柱状图**
+ 改变指定颜色的柱子
```js
  series : [{
    type:'bar',
    barWidth: '60%',
    data:[10, 
      {
        value:52,
        itemStyle: {
          color: 'pink',
        }
      }, 12, 10, 22
      ]
    }
  ]
```
**&#x1F4DA; 折线图**

**&#x1F4DA; hover效果内容**
+ tooltip.formatter 设置hover显示内容 自定义回调函数
```js
  formatter: function (params) {
    console.log(1)
    console.log(params)
    return '区间：' + '1284756.212223~2284756.212223(元)' +'<br>' + '频数：' + 52
    }
  },
``` 


**&#x1F4DA; hover背景**
+ tooltip.axisPointer 设置背景线条还是条状
```js
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  }
```