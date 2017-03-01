/**
_.delay
- Create a function that takes two parameters and returns a function
- If the second parameter is not defined, set the second parameter to 1.
- In the inner function, call setTimeout with the two parameters from the outer function.
*/

function delay(func, wait, args) {
  setTimeout(func.bind(null, args), wait);
}

delay(function(args) {
  console.log(args);
}, 1000, ["Pawanpreet", "Preet"]);
