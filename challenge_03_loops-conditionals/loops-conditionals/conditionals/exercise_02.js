/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
// const age = 20;

// if (age < 3) {
//   console.log("You're just a baby!");
// } else if (age >= 3) {
//   console.log("You are in elementary school, kid.");
// } else if (age >= 13) {
//   console.log("Nice, you're a teenager!");
// } else if (age >= 18) {
//   console.log("Most places consider you an adult.");
// } else {
//   console.log("What? How did this happen!?");
// }

// Solution

// The problem is that the first if statement is true, so the rest of the else if statements are ignored.

const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
}

if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
}

if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
}

if (age >= 18) {
  console.log("Most places consider you an adult.");
}

if (age >= 3 && age < 18) {
  console.log("What? How did this happen!?");
}
