function spread(x = 1, y = 2, z = 3){
  return x + y + z
}

let params = [3,4,5]
console.log('spread: ', spread(...params))

function rest(a, b, ...params){
  return a + b + params.length
}

console.log('rest: ', rest(2, 2, 'teste', 3, null))