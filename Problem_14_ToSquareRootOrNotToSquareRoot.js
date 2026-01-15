/**
 * Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]



link      https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
 */

function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    var num = Math.floor(Math.sqrt(array[i]));
    if( array[i] == Math.pow(num, 2)){

      array[i] = num;
      document.write("this number "+ array[i] + "has a sqrt root<br>");
    }
    else{

      array[i] = Math.pow(array[i], 2);
      document.write("this number "+ array[i] + "has not a sqrt root<br>");
    }
  }  
  return array;
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));
console.log(squareOrSquareRoot([ 10, 10.04987562112089, 25, 25, 1, 1 ]));


//way 2

function squareOrSquareRoot(array) {

  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if(Number.isInteger(Math.sqrt(array[i]))){
      newArr.push(Math.sqrt(array[i]));
    }
    else{

      newArr.push(array[i] * array[i]);
    }
  }  
  return newArr;
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));
console.log(squareOrSquareRoot([ 10, 10.04987562112089, 25, 25, 1, 1 ]));



//way 3

function squareOrSquareRoot(array) {

  return array.map(num => (Number.isInteger(Math.sqrt(num)))? Math.sqrt(num) : num * num);
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));
console.log(squareOrSquareRoot([ 10, 10.04987562112089, 25, 25, 1, 1 ]));