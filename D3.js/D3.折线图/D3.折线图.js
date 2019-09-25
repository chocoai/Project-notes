function line_G_chart (demoData) {
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
  if (document.querySelector(demoData.el) === null) {
    console.error('Please select the container.')
    console.error('el it is id or class')
  }

  const titleText = demoData.titleText || ''
  const xtitle = demoData.xtitle || ''
  const ytitle = demoData.ytitle || ''
  const yAxis_data = demoData.yAxis_data
  const xAxis_data = demoData.xAxis_data
  const width = demoData.width
  const height = demoData.height
  let totalData = []
  const chart = d3.select(demoData.el)
  const colorArr = ['#c23531', '#2f4554','#009966','#d48265','#ff9933','#3fa7dc','#e4b19f','#b0aa95','#90e5e7','#6fbae1', '#91c7ae', '#ffdb5c', '#d53a35']

  let svgLeft = 40
  let svgTop = 70
  let svgBottom = 0
  // 获取根元素
  let svg = chart.append('svg').attr('width', width + 100).attr('height', height + 100)

  // 添加图表标题 和 横纵坐标轴title
  svg.append('text').attr('transform', 'translate(10, 25)').text(titleText).attr('style', 'font-weight: 600;').enter()
  svg.append('text').text(xtitle).attr('transform', "translate("+(width - 10)+"," + (height - 20) + ")").attr('style', 'font-size: 12px;')
  svg.append('text').text(ytitle).attr('transform', "translate(" + svgLeft / 4 + ",56)").attr('style', 'font-size: 12px;')
  svg.append('text').text(demoData.ytitle_II).attr('class', 'ytitle_II').attr('transform', 'translate(' + (width - 20) + ',' + 65 + ')')


  // 设置比例尺  (横坐标的比例尺)
  let xlinear = d3.scaleLinear().domain([0, xAxis_data.length - 1]).range([0, width - svgLeft - 20])
  // 定义纵坐标比例尺
  let ylinear = d3.scaleLinear().domain([0, getMax(yAxis_data) + getMax(yAxis_data) * 0.2]).range([height - svgTop - 20, 0])

  if (demoData.ytitle_II.length && demoData.yAxis_data_II.length === demoData.yAxis_data[0].length) {
    // 定义比例尺
    let ylinear_II = d3.scaleLinear().domain([0, d3.max(demoData.yAxis_data_II) + d3.max(demoData.yAxis_data_II) * 0.2]).range([height - svgTop - 20, 0])
    // 定义第二个坐标轴
    let yAxis_II = d3.axisRight(ylinear_II).ticks(demoData.yAxis_data_II.length)
    // 绘制坐标轴
    svg.append('g').attr('class', 'yAxis_II').attr('transform', "translate(" + (width - svgLeft + 20) + "," + svgTop + ")").call(yAxis_II)
  }

  // 定义横坐标轴
  
  // 绘制纵坐标
  let yAxis = d3.axisLeft(ylinear).ticks(yAxis_data[0].length)
  svg.append('g').attr('class', 'yAxis').attr('transform', "translate("+ svgLeft + "," + svgTop +")").call(yAxis)
  
  // 绘制背景轴线
  d3.selectAll('.yAxis > g').append('line').attr('stroke', 'currentColor').attr('x2', width - 60).attr('stroke', '#ccc')

  // 绘制横坐标
  let xAxis = d3.axisBottom(xlinear).ticks(xAxis_data.length)
  svg.append('g').attr('class', 'xAxis').attr('transform', "translate("+ svgLeft + "," + (height - 20) + ")").call(xAxis)
  d3.selectAll('.xAxis > .tick > text').data(xAxis_data).text(d => d)
  
  // 循环二维数组 将每一组数据去绘制
  yAxis_data.forEach((item, index) => {
    drawSVG(item, index)
  })
  function drawSVG (y_item, color_index) {
    let data = []
    y_item.forEach((item, index) => {
      data.push({
        x: index,
        y: item
      })
    })
    let data_g = svg.append('g')
    data_g.append('polyline').attr('points', () => {
    let d = ''
    data.forEach((item, index) => {
      d += xlinear(item.x) + ',' + ylinear(item.y) + ' '
      data_g.append('circle')
        .attr('cx', xlinear(item.x))
        .attr('cy', ylinear(item.y))
        .attr('r', 1.5)
        .attr('fill', '#fff')
        .attr('stroke', colorArr[color_index])
        .attr('stroke-width', 1)
        .attr("transform","translate(" + 40 + "," + 70 + ")")
      })
      return d
    })
    .attr('fill', 'none')
    .attr('stroke', colorArr[color_index])
    .attr('stroke-width', '1px')
    .attr("transform","translate(" + 40 + "," + 70 + ")")
  
  }
  // 添加Hover-text 添加一次就够了
  let rect_g = svg.append('g')
  let rect = rect_g
  .append('rect')
  .attr('class', 'hover-text')
  let xAxis_data_title = rect_g.append('text').attr('class', 'xAxis_data').attr('style', 'font-size: 12px;')
  let yAxis_data_title = rect_g.append('text').attr('class', 'yAxis_data').attr('style', 'font-size: 12px;')
  d3.selectAll('circle').data(totalData).on('mouseover', function (d) {
    rect.transition().ease(d3.easeCubicInOut).style('display', 'block')
    xAxis_data_title.transition().ease(d3.easeCubicInOut).style('display', 'block')
    yAxis_data_title.transition().ease(d3.easeCubicInOut).style('display', 'block')
    rect.attr('x', Number(d3.select(this).attr('cx')) + 50)
    rect.attr('y', Number(d3.select(this).attr('cy')) + 80)
    xAxis_data_title
      .text(xtitle + ' : ' + d.xAxis_data)
      .attr('fill', '#fff')
      .attr('transform', "translate("+ (Number(d3.select(this).attr('cx')) + 60) +","+ (Number(d3.select(this).attr('cy')) + 105) +")")
    yAxis_data_title
      .text(ytitle + ' : ' + d.yAxis_data)
      .attr('fill', '#fff')
      .attr('transform', "translate("+ (Number(d3.select(this).attr('cx')) + 60) +","+ (Number(d3.select(this).attr('cy')) + 125) +")")
    d3.select(this).attr('r', 5).transition().ease(d3.easeCubicInOut).attr('r', 4).on('end', null)
  }).on('mouseout', function () {
    d3.select(this).transition().ease(d3.easeCubicInOut).attr('r', 1.5)
    rect.transition().ease(d3.easeCubicInOut).style('display', 'none')
    xAxis_data_title.transition().ease(d3.easeCubicInOut).style('display', 'none')
    yAxis_data_title.transition().ease(d3.easeCubicInOut).style('display', 'none')
  })
  function getMax (arr) {
    let maxArr = 0
    for (let i = 0; i < arr.length; i++) {
      maxArr = maxArr > d3.max(arr[i]) ? maxArr : d3.max(arr[i])
      arr[i].forEach((item, index) => {
        totalData.push({
          xAxis_data: xAxis_data[index],
          yAxis_data: yAxis_data[i][index]
        })
      })
    }
    return maxArr
  }
}
function isType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
function getRandom () {
  return Math.floor(Math.random() * 10)
}
