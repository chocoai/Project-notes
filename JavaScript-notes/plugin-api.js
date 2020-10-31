// urlcode
let url = '游戏业务-报销费用';

let encodeurl = encodeURI(url);
let decodeurl = decodeURI(url);

let encodeurlcom = encodeURIComponent(url);
let decodeurlcom = decodeURIComponent(url);

console.log(encodeurl);
console.log(decodeurl);

console.log(encodeurlcom);
console.log(decodeurlcom);


// 位运算OR |   （或）
25 | 8
0000 0000 0000 0000 0000 0000 0001 1001 
0000 0000 0000 0000 0000 0000 0000 1000
--------------------------------------------
0000 0000 0000 0000 0000 0000 0001 1001

// 位运算AND &  （且）
25 & 8
0000 0000 0000 0000 0000 0000 0001 1001 
0000 0000 0000 0000 0000 0000 0000 1000
--------------------------------------------
0000 0000 0000 0000 0000 0000 0000 1000