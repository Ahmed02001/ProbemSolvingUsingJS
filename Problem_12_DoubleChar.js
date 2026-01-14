// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// link   https://www.codewars.com/kata/56b1f01c247c01db920000


//way 1   take 814 ms
function doubleChar(str) {
  // Your code here
  var repeatStr = '';
  for (let i = 0; i < str.length; i++) {
    repeatStr += str[i].repeat(2);
  }

  return repeatStr;
}

console.log(doubleChar("string"));


//way 2 take 794 ms

function doubleChar(str) {
  // Your code here
 
  return str.split('').map(s => s.repeat(2)).join('');
}

console.log(doubleChar("string"));