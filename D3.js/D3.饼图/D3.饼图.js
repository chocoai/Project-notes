function circle_G_chart (demoData) {
  /**
   * 判断数据类型是否真确
   **/
  if (isType(demoData) !== 'Object') {
    console.error('function parameter it is Object')
  }
  /**
   * 横纵坐标的数据应该是Array
  */
  if (isType(demoData.title_data) !== 'Array') {
    console.error('title_data it is Array')
  }
  if (isType(demoData.data) !== 'Array') {
    console.error('data it is Array')
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
  
  if (isType(demoData.outerRadius) !== 'Number' && !isNaN(demoData.outerRadius)) {
    console.error('outerRadius it is Number')
  }
  if (isType(demoData.innerRadius) !== 'Number' && !isNaN(demoData.innerRadius)) {
    console.error('innerRadius it is Number')
  }
  /**
   * 判断el DOM 是否存在
   */
  if (document.querySelector(demoData.el) === null) {
    console.error('Please select the container.')
    console.error('el it is id or class')
  }

  const titleText = demoData.titleText || ''
  const width = demoData.width
  const height = demoData.height
  const unit = demoData.unit || ''
  const title_data = demoData.title_data
  const data = demoData.data
  const outerRadius = demoData.outerRadius || 150
  const innerRadius = demoData.innerRadius || 0
  const cake = d3.select(demoData.el)

  // let width = 600
  // let height = 800
  // let titleText = '各互联网公司门卫数量'
  // let unit = '数量'
  // let title_data = ['百度', '谷歌', '新浪', '腾讯', '阿里']
  // let data = [1100, 100, 1007, 1408, 1120]
  // 外半径
  // let outerRadius = 150
  // 内半径
  // let innerRadius = 0

  // let cake = d3.select('#cake')
  let svg = cake.append('svg')
  svg.attr('style', `width: ${width};height: ${height};`)

  // 添加标题
  svg.append('text').attr('transform', 'translate(15, 25)').text(titleText).attr('style', 'font-weight: 600;').enter()

  // 添加hover
  let rect_g = svg.append('g')
  let rect = rect_g
  .append('rect')
  .attr('class', 'hover-text')
  .attr('transform', 'translate('+ (width - 100) +')')
  rect_g.append('text').attr('class', 'unit').attr('fill', '#fff').attr('transform', 'translate('+ (width - 90) + ',' + 22 +')')
  rect_g.append('text').attr('class', 'title_data_item').attr('fill', '#fff').attr('transform', 'translate('+ (width - 90) + ',' + 45 +')')


  // 数据转换 将数据转化为path路径可以用的数据
  let pie = d3.pie()
  let cake_data = pie(data)
  console.log(cake_data)
  // 设置元半径  arc 是个函数 可以
  let arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)

  // 设置颜色区间
  let color = d3.interpolateRgb(d3.rgb('#e91b1b'), d3.rgb('#06c3ff'))

  /* ----- 生成外环 ----- */
  let p_arc = d3.arc().innerRadius(outerRadius).outerRadius(outerRadius + 100)

  // 获取外环path路径  
  let p_data = pie(data)
  console.log(p_data)
  p_data.forEach((item, index) => {
    svg
      .append('g')
      .attr('class', 'p_radius')
      .attr('fill', '#fff')
      // .append('path')
      // .attr('d', p_arc(item))
      // .attr("transform","translate("+ (width/2) +","+ (height/2) +")")
  })
  let end_p_arc_All = []
  d3.selectAll('.p_radius').append('polyline')
    .data(p_data)
    .attr('points', d => {
      let new_p_arc = p_arc.centroid(d).map((item, index) => {
        if (index) {
          item = item + height / 2
        } else {
          item = item + width / 2
        }
        return item
      })
      end_p_arc = p_arc.centroid(d).map((item, index) => {
        if (!index) {
          if (item > 0) {
            item = item + 50 + width / 2
          } else {
            item = item - 50 + width / 2
          }
        } else {
          item = item + height / 2
        }
        return item
      })
      end_p_arc_All.push(end_p_arc)
      return width / 2 + ',' + height / 2 + ' ' + new_p_arc + ' ' + end_p_arc
    })
    .attr('stroke', '#ccc')
    .attr('fill', '#fff')
    .attr('stroke-width', 2)
    console.log(end_p_arc_All)
    d3.selectAll('.p_radius').append('text').data(title_data).attr('fill', '#000').attr('transform', (d, index) => {
      return "translate("+ end_p_arc_All[index] +")"
    }).text(d => d)
  // 生成路径之后 填充的内容就是数据的没一项

  // 设置内环属性
  cake_data.forEach((item, index) => {
    svg
      .append('g')
      .attr('class', 'until')
      .attr("transform","translate("+ (width/2) +","+ (height/2) +")")
      .append('path')
      .attr('stroke-width', '0px')
      .attr('d', arc(item))
      .attr('fill', color(item.data / d3.max(data)))
      .data([data[index]])
      .on('mouseover', function (d) {
        d3.select('.hover-text').style('display', 'block')
        d3.select('.unit')
        .text(title_data[index])
        d3.select('.title_data_item')
        .text(unit + ':' + d)
        // 计算新的外围半径 然后渲染
        let new_arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius + 15)
        d3.select(this)
        .attr('d', d3.arc().innerRadius(innerRadius).outerRadius(outerRadius + 15)(item))
          .transition()
          .duration(100)
          .ease(d3.easeCubicInOut)
          .attr('d', d3.arc().innerRadius(innerRadius).outerRadius(outerRadius + 10)(item))
          .on('end', null)
        })
        .on('mouseout', function () {
          d3.select('.hover-text').style('display', 'none')
          // 恢复原来的半径、
          d3.select(this)
        .transition()
        .duration(100)
        .attr('d', arc(item))
        .on('end', null)
      })
  })
}
function isType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
