/**
_.flow
- Create a function that returns a function that takes a single array of functions as argument
- In inner function, create a local variable result
- In inner function, need to iterate through each function in outer function's parameter.
- In the first iteration, set the result to the result of applying the arguments of the inner function to the element function
- In all other iterations, set the result to the result of calling the element function with the previous result
- Return the result after iteration is complete.
*/

function flow(functions) {
  return function(a, b) {
    var result;
    for (var i = 0; i < functions.length; i++) {
      if (i == 0) {
        result = functions[i](a, b);
      } else {
        result = functions[i](result);
      }
    }
    return result;
  }
}
sum = function(a, b) {
  return a + b;
}
square = function(n) {
  return n * n;
}
var addSquare = flow([sum, square]);
console.log(addSquare(10, 10));
