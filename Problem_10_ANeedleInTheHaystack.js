// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

////link https://www.codewars.com/kata/56676e8fabd2d1ff3000000c


//way 1
function findNeedle(array){
  for (let i = 0; i < array.length; i++) {
    if(array[i] == 'needle')
      return "found the needle at position " + i;
  }
}

// var arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

// var arr =  [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]

var arr = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]

console.log(findNeedle(arr))


//way 2
function findNeedle(array){
  return "found the needle at position " + array.indexOf('needle') ;
}

console.log(findNeedle(arr));