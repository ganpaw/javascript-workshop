//console.log(Array.prototype.slice.apply([10, 20, 30], [1, 2]));

/**
_.partial (ignore placeholders)
https://lodash.com/docs#partial
- Create a function that returns a function.
- In outer function, convert arguments into array using Array.prototype.slice.apply.
- In outer function create local variables within closure to store the first argument and an array of the remaining arguments.
- In inner function, concat the array of remaining arguments from the outer function with the arguments of the inner function.
- In inner function, return the result of applying the concatenated arguments to the first argument from the outer function.
*/

function partial() {
  var parameters = Array.prototype.slice.apply(arguments);
  //console.log(parameters);
  var firstValue = parameters[0];
  console.log(firstValue);
  var remaining = Array.prototype.slice.apply(parameters, [1]);
  console.log(remaining);

  return function(value) {
    //remaining.push(value);
    return firstValue(remaining, value);
  }
}

function greet(greeting, name) {
  return greeting + ' ' + name;
}
var sayHelloTo = partial(greet, "Hello");
console.log(sayHelloTo('Preet'));
