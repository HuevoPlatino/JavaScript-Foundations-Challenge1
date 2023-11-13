/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/
function getTypeOf(valor) {
  return typeof valor;
}

console.log(getTypeOf("Hello Jaume")); // String
console.log(getTypeOf(42)); // Number
console.log(getTypeOf(true)); // Boolean
console.log(getTypeOf(null)); // null
console.log(getTypeOf(undefined)); // undefined
