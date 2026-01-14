/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


link  https://www.codewars.com/kata/576bb71bbbcf0951d50000
*/

//way 1  take 803 ms
function countPositivesSumNegatives(input) {
  // your code here
  if(input == null)
    return [];

  var countOfPositiveNumber = 0;
  var sumOfNegativeNumber = 0;

  for (let i = 0; i < input.length; i++) {
    
    if(input[i] > 0)
      countOfPositiveNumber++;  
    else if(input[i] < 0)
      sumOfNegativeNumber += input[i];
  }
  if(countOfPositiveNumber == 0 && sumOfNegativeNumber == 0)
    return [];
  return [countOfPositiveNumber, sumOfNegativeNumber];
}

console.log(countPositivesSumNegatives([0, 0]))


//way 2  /// take 887 ms

function countPositivesSumNegatives(input) {
  // your code here
  if(input == null)
    return [];

  var countOfPositiveNumber = 0;
  var sumOfNegativeNumber = 0;

  countOfPositiveNumber = input.filter(x => x > 0).length;

  sumOfNegativeNumber = input.filter(x => x < 0).reduce((acc, cur) => acc + cur, 0);

  if(countOfPositiveNumber == 0 && sumOfNegativeNumber == 0)
    return [];
  return [countOfPositiveNumber, sumOfNegativeNumber];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))