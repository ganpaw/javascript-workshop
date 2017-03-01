/**
> How to access arguments (arguments). Understand arguments is array like object, but not array -
how can you convert arguments to array so it's easier to work with? Understand in closures that inner
function arguments refer to arguments of inner functions only, they override outer function arguments,
but we can capture outer arguments by setting them to local variables within our closure. Be able to
easily work with functions that take variable number of arguments.
*/
function display() {
  var values = Array.prototype.slice.call(arguments);
  return function() {
    //console.log(arguments);
    console.log(values); // accessing outer function arguments
    console.log(arguments);
  }
}

display(1, 2, 3)(4, 5, 6);
