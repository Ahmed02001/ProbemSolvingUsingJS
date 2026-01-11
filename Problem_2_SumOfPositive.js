/*
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1 + 7 + 12 = 20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/
// var arr = [-7,41,23,-70,48,43,68,-90,32,1,39,17,-52,-16,72,-86,-44,-37,-32,89,67,22,-67];

var arr = [];
var sum = 0;
for (let i = 0; i < arr.length; i++) {

  if(arr[i] > 0)
    sum += arr[i];
}

console.log(sum);