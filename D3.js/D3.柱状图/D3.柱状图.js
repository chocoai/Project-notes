function column_G_chart (demoData) {
  console.log(demoData)
  /**
   * 判断数据类型是否真确
   **/
  if (isType(demoData) !== 'Object') {
    console.error('function parameter it is Object')
  }
  /**
   * 横纵坐标的数据应该是Array
  */
  if (isType(demoData.yAxis_data) !== 'Array') {
    console.error('yAxis_data it is Array')
  }
  if (isType(demoData.xAxis_data) !== 'Array') {
    console.error('xAxis_data it is Array')
  }
  /** 
   * 判断width 和 height是否为数字类型
  */
  if (isType(demoData.width) !== 'Number' && !isNaN(demoData.width)) {
    console.error('width it is Number')
  }
  if (isType(demoData.height) !== 'Number' && !isNaN(demoData.height)) {
    console.error('height it is Number')
  }

  /**
   * 判断el DOM 是否存在
   */
  console.log(demoData.el)
  if (document.querySelector(demoData.el) === null) {
    console.error('Please select the container.')
    console.error('el it is id or class')
  }

  let svg = d3.select(demoData.el).append('svg')
  let charTitle = demoData.charTitle || ''
  let width = demoData.width
  let height = demoData.height
  let xtitle = demoData.xtitle || ''
  let ytitle = demoData.ytitle || ''
  let yAxis_data = demoData.yAxis_data
  let xAxis_data = demoData.xAxis_data
  let rectBg = demoData.rectBg || 'rgb(194, 53, 49)'
  let rectBg_hover = demoData.rectBg_hover || 'rgb(213, 58, 53)'
  xAxis_data.unshift(0)
  let svgpaddingLeft = 40
  let svgpaddingTop = 70

  // 设置SVG的大小
  svg.attr('width', width + 100).attr('height', height + 100)

  // 设置比例尺  (横坐标的比例尺)
  let xlinear = d3.scaleLinear().domain([0, xAxis_data.length - 1]).range([0, width - 60])
  // 定义纵坐标比例尺
  let ylinear = d3.scaleLinear().domain([0, d3.max(yAxis_data) + d3.max(yAxis_data) * 0.2]).range([height - 40, 0])

  // 定义纵坐标
  let yAxis = d3.axisLeft(ylinear).ticks(yAxis_data.length)
  svg.append('g').attr('class', 'yAxis').attr('transform', "translate(" + svgpaddingLeft + "," + svgpaddingTop + ")").call(yAxis)

  // 创建矩形存放的位置  因为需要纵坐标的点的位置  所以要先绘制出Y轴  又因为X轴先绘制会被后来的背景轴线覆盖 
  let myRect = svg.append('g').attr('class', 'MyRect')
  // 绘制背景轴线
  d3.selectAll('.yAxis > g').append('line').attr('stroke', 'currentColor').attr('x2', width - 60).attr('stroke', '#ccc')

  // 定义横坐标轴
  let xAxis = d3.axisBottom(xlinear).ticks(xAxis_data.length)
  svg.append('g').attr('class', 'xAxis').attr('transform', "translate(" + svgpaddingLeft + "," + (height + 30) + ")").call(xAxis)

  if (demoData.ytitle_II.length && demoData.yAxis_data_II.length === demoData.yAxis_data.length) {
    // 定义比例尺
    let ylinear_II = d3.scaleLinear().domain([0, d3.max(demoData.yAxis_data_II) + d3.max(demoData.yAxis_data_II) * 0.2]).range([height - 40, 0])
    // 定义第二个坐标轴
    let yAxis_II = d3.axisRight(ylinear_II).ticks(demoData.yAxis_data_II.length)
    // 绘制坐标轴
    svg.append('g').attr('class', 'yAxis_II').attr('transform', "translate(" + (width - svgpaddingLeft + 20) + "," + svgpaddingTop + ")").call(yAxis_II)
  }
  // 替换横坐标
  d3.selectAll('.xAxis > .tick > text').data(xAxis_data).text((d, i) => {
    if (i !== 0) return xAxis_data[i]
  })

  // 将图标题固定
  svg.append('text').text(charTitle).attr('transform', 'translate(' + 20 + ',' + 40 + ')')

  // 将横纵坐标标题展示
  svg.append('text').text(xtitle).attr('class', 'xtitle').attr('transform', 'translate(' + width + ',' + (height + 35) + ')')
  svg.append('text').text(ytitle).attr('class', 'ytitle').attr('transform', 'translate(' + 20 + ',' + 65 + ')')
  svg.append('text').text(demoData.ytitle_II).attr('class', 'ytitle_II').attr('transform', 'translate(' + (width - 20) + ',' + 65 + ')')


  // 获取一个横坐标单元格的Px距离
  let spacing = xlinear(1) - xlinear(0)

  // 遍历数据 动态添加矩形
  yAxis_data.forEach((item, index) => {
    myRect
      .append('rect')
      .attr('fill', rectBg)
      .attr('x', xlinear(index) + svgpaddingLeft + 20 / 2)
      .attr('y', ylinear(item) + svgpaddingTop)
      .attr('width', spacing - 20)
      .attr('height', height - ylinear(item) - 40)
  })
  d3.selectAll('rect').on('mouseover', function () {
    d3.select(this).transition().ease(d3.easeCubicInOut).attr('fill', rectBg_hover)
  }).on('mouseout', function () {
    d3.select(this).transition().ease(d3.easeCubicInOut).attr('fill', rectBg)
  })
  d3.selectAll('.xAxis > g > text').style('position', 'relative').attr('x', -spacing / 2)

}

function isType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}