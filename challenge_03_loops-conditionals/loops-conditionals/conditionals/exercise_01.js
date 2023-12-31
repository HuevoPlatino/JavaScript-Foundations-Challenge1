/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

console.log("--- Even or Odd ---");

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  if (number % 2 !== 0) {
    return "Odd";
  }
}

let number = 4;
console.log(checkEvenOrOdd(number));

number = 5;
console.log(checkEvenOrOdd(number));
