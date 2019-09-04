let url = 'https://www.baidu.com/s?ie=UTF-8&wd=js格式化'

function getUrl(name) {
  let url = window.location.search.substr(1)
  let c = {}
  url.split("&").forEach(item => {
    c[item.split('=')[0]] = item.split('=')[1]
  })
  return c[name]
}