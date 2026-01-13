/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

link on codewares  https://www.codewars.com/kata/54edbc7200b811e956000556
*/

// way 1

 var arr = [true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true];


function sheepPresent(arr){
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == true)
      count++ ;
  }
  return count;
}

console.log(sheepPresent(arr));

// way 2

 var arr = [true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true];


function sheepPresent(arr){
  return arr.filter(x => x == true).length;

}


console.log(sheepPresent(arr));




