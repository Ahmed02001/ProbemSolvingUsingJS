// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// link on coodewars    https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
//way 1

function digitize(n){
  var result = n.toString().split("");

  for (let i = 0; i < result.length; i++) {
    result[i] = Number(result[i]);
    
  }
  return result.reverse();
}
console.log(digitize(35231));


//way2 

function digitize(n){
  return n.toString().split('').map(x => Number(x)).reverse();
}

console.log(digitize(12345));