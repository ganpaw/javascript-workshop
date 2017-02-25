greet();

/**
 Hoisted at the time of Exceution Context
 Creation Phase
*/
function greet() {
  console.log('Hello DealsCandy');
}

console.log(functionExpression);
// functionExpression(); // TypeError: Not a function

/**
 This is an expression where functional is
 a value but creates during execution Context
 Run phase and it is anonymous.

 This does not get hoisted
*/
var functionExpression = function() { // No NAME prop
  console.log("Fucntion Expression"); // CODE
}

functionExpression(); // Invokes

/**
  Function expression passing
  to another function: Function programming
*/
var myVar = 100;

function log(a) {
  var myVar = 200;
  console.log(a);
  a();
}

log(function() {
  console.log(myVar);
});

/**
 Pass by Value (primitive types)
 and Pass by Reference
*/
