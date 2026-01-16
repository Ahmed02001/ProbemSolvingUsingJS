// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.


// link    https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

// way 1

function invert(array) {
   for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * -1;
   }
   return array;
}

console.log(invert([1, 2, -3, 4, -5]))


// way 2
function invert(array) {
   return array.map(x => -x);
}

console.log(invert([1, 2, -3, 4, -5]))