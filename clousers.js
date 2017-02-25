// Case 1
function greet(whattosay) {
  var myVar = "Good Morning";
  var fn = function(name) {
    console.log(myVar + ', ' + whattosay + ' ' + name);
  }
  myVar = "Good Night";
  return fn;
}

var sayHello = greet('Hello');
sayHello('World');

// Case 2
function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {

    // Case 1. here last value of x will used. Output all 3
    // arr.push(
    //   function() {
    //     console.log(x);
    //   }
    // );


    // Case 2 where we execute function in loop and
    // make 3 x variable in memory as function will be called
    // 3 times, that mean 3 stacks with each stack push function
    // array
    // (function(x) {
    //   arr.push(
    //     function() {
    //       console.log(x);
    //     }
    //   );
    // })(i);
    //or
    arr.push((function(x) {
      return function() {
        console.log(x);
      }
    })(i));

    // Case 3 using ES6 'let'
    // let j = i;
    // arr.push(
    //   function() {
    //     console.log(j);
    //   }
    // );

  }
  return arr;
}
var fn = buildFunctions();
for (var i = 0; i < 3; i++) {
  fn[i]();
}
