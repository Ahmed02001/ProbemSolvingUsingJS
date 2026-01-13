// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// /// link for this problem on codewares   https://www.codewars.com/kata/53da3dbb4a5168369a0000fe


//way 1

function isEvenOrIdd(num){
  if(num % 2 == 0)
    return "Even";
  else
    return "Odd";
}


console.log(isEvenOrIdd(1));

//way 2


function evenOrIdd(number){
  return (number % 2 == 0)?"Even" : "Odd";
}


console.log(evenOrIdd(10));

