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
+ nameLocation('end')
```txt
  坐标轴名称的位置
```
+ nameGap(Number)
```txt
  坐标轴名称和坐标轴的距离
```
+ axisLabel(Object)
```txt
  坐标游标样式
```
```js
  axisLabel: {
    interval: 0,
    rotate: 45,  // 旋转角度
    textStyle: {
      fontSize: 10
    }
  },
```
+ axioLine(Object)
```txt
  坐标轴颜色，样式
```
```js
  axisLine: {
    lineStyle: {
      color: '#424858',
      width: 1
    }
  }
```
+ boundaryGap(boolean)
```txt
  坐标轴两边留白政策
```
+ nameRotate(number)
```txt
  坐标轴名称旋转
```

+ 坐标轴名称换行
```txt
  \n
```

**&#x1F4DA; 纵坐标 yAxis**
+ name()
```txt
  刻度线和标签对齐方式
```
```txt
  同X轴API相同
```
**&#x1F4DA; 柱状图**
+ 改变指定颜色的柱子
```js
  series : [{
    type:'bar',
    // 柱子的宽度 可以直接设置像素值大小
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
+ 柱子渐变色
```js
  series : [{
    type:'bar',
    barWidth: '60%',
    data:[10, 
      {
        value:52,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: '#FF9891'
              }, {
                offset: 1,
                color: '#FF3A31'
              }
            ])
          },
        }
      }, 12, 10, 22
      ]
    }
  ]
```
**&#x1F4DA; 饼图**
+ 饼图指定区域颜色设置
```js
  axisLine = {
    lineStyle: {
      color: [
        [0.2, "#91c7ae"],
        [0.8, "#63869e"],
        [1, "#c23531"],
      ]
    }
  }
  // 0-20%
  // 20%-80%
  // 80% -100%
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
**&#x1F4DA; 散点图**
+ 散点大小
```js
  {
    type: 'scatter',
    symbolSize: 4,
    data: newData
  }
```
+ 散点颜色
```js
  {
    type: 'effectScatter',
    symbolSize: 6,
    data: [
      {
        value: datas.series_data_i,
        itemStyle: {
          color: 'rgba(255,113,113,.9)' // 单独设置散点颜色
        }
      }
    ]
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
+ tooltip.axisPointer 设置坐标轴指示器 也就是鼠标移动的那条线
```js
  type: String // 虚线 十字 实线
  lineStyle: {
    color: 'red'  // 颜色 很自由当时实线的时候起作用
  }
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

**&#x1F4DA; hover背景渐变**
+ tooltip.axisPointer 设置背景线条还是条状
```js
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
      shadowStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: 'rgba(227, 232, 236, 0.5)'
            }, {
              offset: 1,
              color: 'rgba(196, 225, 241, 0.21)'
            }
          ])
        },
      }
    }
  }
```

**&#x1F4DA; tooltip坐标轴高亮**
+ tooltip.axisPointer 设置坐标轴高亮显示
```js
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: "red" // 游标背景色
      }
    }
  }
```
**&#x1F4DA; 背景网格**
+ splitLine X Y 需要单独设置
```js
  splitLine: {
    show: true,    // 是否显示
    lineStyle: {
      color: ['#e2e7e8'], // 网格颜色
      width: 1,        //  宽度
      type: 'solid' // 网格类型
    }
  }
```


**&#x1F4DA; 图例**
+ legend(Object)
```js
  legend: {
    data: datas.legend,
    x: '214px',
    y: '10px'
  },
```


**&#x1F4DA; 图表标线**
+ series.markLine(Object)
```js
  // 可以自定义标线的位置  也可以通过内置函数自动设置 均值 最大值 最小值等 同时可以设置实线和虚线 
  markLine: {
    symbol: 'none',
    label: {
      position: 'end',
    },
    data: [{
      xAxis: 437180,
      lineStyle: {
        color: '#4CD964',
        type: 'solid',
        shadowOffsetX: 3,
        shadowColor: '#ff950052',
        shadowBlur: 3
      },
      label: {
        show: true,
        position: 'end',
        formatter: '最小值'
      }
    },{
      xAxis: 636780,
      lineStyle: {
        color: '#FF3B30',
        type: 'dotted',
        shadowOffsetX: 3,
        shadowColor: '#ff950052',
        shadowBlur: 3
      },
      label: {
        show: true,
        position: 'end',
        formatter: '最大值'
      }
    }
  },
```

**&#x1F4DA; 图表标线阴影-虚化程度**
+ series.markLine.data.lineStyle.shadowBlur


**&#x1F4DA; 图表标线阴影-颜色**
+ series.markLine.data.lineStyle.shadowColor


**&#x1F4DA; 图表标线阴影-水平偏移距离**
+ series.markLine.data.lineStyle.shadowOffsetX



# &#x1F3AC; Echarts 常见问题
**&#x1F4DA; 切换echarts图表 绑定的点击事件多次触发**
+ 解决方案
```js
  // 实例化echarts对象
  let echarts = echarts.init('#echarts')
  // 使用off方法清除上一次的click事件
  echarts.off("click);
  // 绑定这次的点击事件
  echarts.on("click", function () {})
```