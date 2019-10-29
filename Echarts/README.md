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
+ 折线虚线
```js
  {
    name:'行业均值',
    type:'line',
    smooth:false,  //关键点，为true是不支持虚线的，实线就用true
    itemStyle:{
      normal:{
        lineStyle:{ 
          type:'dotted' //'dotted'虚线 'solid'实线 
        } 
      } 
    },
    data:[120, 132, 101, 134, 90, 230, 210]
  }
```
**&#x1F4DA; hover效果内容**
+ tooltip.formatter 设置hover显示内容 自定义回调函数
```js
  formatter: function (params) {
    console.log(1)
    console.log(params)
    // params是一个数组  数组的每一项是当前移动点的数据 数据展示的有
    {
      marker: '',   // 小圆点
      data: ,   // 当前数据点的值  可能是字符串  可能是对象  看下面数据设置的格式
      dataIndex: Number  // 所在当前数据中的索引 
      color: ''         // 当前点位设定的颜色   
      seriesType: ''    //  当前数据设置的类型  和 series.type对应
    }

    // 如果要自己写  建议直接for params 拼接字符串 最后返回  可以直接用marker形成的原点
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