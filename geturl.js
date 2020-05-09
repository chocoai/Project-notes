let url = 'https://www.baidu.com/s?ie=UTF-8&wd=js格式化'

function getUrl(name) {
  let url = window.location.search.substr(1)
  let c = {}
  url.split("&").forEach(item => {
    c[item.split('=')[0]] = item.split('=')[1]
  })
  return c[name]
}



function ha(a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
}
let h = 'ccc'
const y = 12

ha``;
ha`xx${1}yy${2}zz${3}`;