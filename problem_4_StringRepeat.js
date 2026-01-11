/*
  Write a function that accepts a non-negative integer
 n and a string s as parameters, and returns a string of s repeated exactly n times.

*/
//way 1
function RepeatStr(n, str){
  return str.repeat(n);
}

console.log(RepeatStr(5, "I"));

//way 2

function repeatStr(n, s){
  var str = '';

  for (let i = 0; i < n; i++) {
    
    str += s;
    
  }
  return str;
}

console.log(repeatStr(5, "I"))