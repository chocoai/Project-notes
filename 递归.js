let a = [
  { 
    name: 'zs', 
    children: [
      {
        name: 'zhhz', 
        children: [
          {
            name: 'zsss', 
            age: 12,
            children: []
          }
        ]
      }
    ]
  }
]

// function fn(a) {
  
//   let e = a[0]
//   let b = a[0].children
//   if (e !== ''){
//     console.log(e);
//     fn(b);
//   }else{
//     return false;
//   }

// }
// let b = {a: 1, b: 2}



// fn(a)
function fn (a) {
  for (let i = 0;i < a.length;i++) {
    
    if (a[i].name == 'zsss') {
      console.log(a[i].age);
    }else{
      fn(a[i].children);
      return;
    }
  }
}
fn(a)