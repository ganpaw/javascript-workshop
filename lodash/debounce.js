//https://lodash.com/docs/4.17.4#debounce
/**
_.debounce
- Create a function that takes two parameters and returns a function
- In outer function, create a local closure variable to store a reference to a timeout
- In the inner function, check to see if the reference to the timeout in the outer function is defined.
- If the reference is NOT defined, then in inner function create a timeout.
- In the timeout, call the first parameter of the outer function with the arguments of the inner function.
- The delay of the timeout is equal to the second parameter of the outer function.
*/

debounce = function(func, wait) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

function sayHello(x) {
  console.log(x)
}
var debouncedSayHello = debounce(sayHello, 10);
debouncedSayHello(1);
debouncedSayHello(2);
debouncedSayHello(3);
debouncedSayHello(3);
debouncedSayHello(3);
debouncedSayHello(3);
debouncedSayHello(3);

setTimeout(debouncedSayHello(4), 2000);
