// 

// link  https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript


// way one   time ==> 884

function reverseWords(str){

  let myStr = []
  let strArr = str.split(' ');
  for (let i = strArr.length - 1; i >= 0 ; i--) {
    
    myStr[(strArr.length - 1) - i] = strArr[i];
    
  }


  return myStr.join(' '); // reverse those words
}


console.log(reverseWords("The greatest victory is that which requires no battle"))



// way two

function reverseWords(str){

  return str.split(' ').reverse().join(' '); // reverse those words
}


console.log(reverseWords("The greatest victory is that which requires no battle"))

