/*
Task
You get an array of numbers, return the sum of all of the positives ones.

// /// link for this problem on codewares   https://www.codewars.com/kata/5715eaedb436cf5606000381

Example
[1, -4, 7, 12] => 
1 + 7 + 12 = 20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/
// var arr = [-7,41,23,-70,48,43,68,-90,32,1,39,17,-52,-16,72,-86,-44,-37,-32,89,67,22,-67];

//way 1

// function SumOfPositiveNumber(arr){
//   var sum = 0;
//   for (let i = 0; i < arr.length; i++) {
    
//     if(arr[i] > 0)
//       sum += arr[i];
//   }
//   return sum;
// }

// var arr = [];

// console.log(SumOfPositiveNumber(arr));

//way 2
function SumOfPositiveNumber(arr){
  return arr.filter(x => x > 0).reduce((acc, current) => acc + current, 0);
}


console.log(SumOfPositiveNumber([1, 5, 4, -3, -6, -2]));