/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

 /// link for this problem on codewares   https://www.codewars.com/kata/576b93db1129fcf2200001e6
*/
/*
 [1]. Check if array is null return 0
 [2]. check if array has 1 element return 0
 [3]. check if array have 2 elements return 0

 [4]. find the heighest number of array
 [5]. find the lowerest number of array

 [6]. sum another elements in array
*/


var arr1 = [6, 2, 1, 8, 10]  //=> 16
var arr2 = [1, 1, 11, 2, 3]  //=> 6


function sumWithoutHeighestAndLowestNumber(arr){
  if(arr == null) return 0;

  if(arr.length <3) return 0;

  return arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, cur) => acc + cur, 0) ;

}

console.log(sumWithoutHeighestAndLowestNumber([0, 1, 6, 10, 10 ]));



