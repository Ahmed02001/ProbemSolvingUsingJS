// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

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

