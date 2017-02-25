// Synchronous behaviour of Javascript Engine
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');


// undefined, null, boolean, number, string, symbol (ES6)

var exp = 100 - 20 + 30 / 5 * 2;
//100 - 20 + 6 * 2;
//100 - 20 + 12;
//80 + 12;
//92
console.log(exp);


var exp = 100 - 20 - 30;
console.log('100 - 20 - 30 =' + exp);

var exp = 100 + 20 - 30;
console.log('100 + 20 - 30 =' + exp);

var exp = 100 - 20 + 30;
console.log('100 - 20 + 30 =' + exp);

// first 2 will be concated and remaining will be nmbers
// "10020" - 20 =  10020 - 20 =  10000
var coercionExp1 = "100" + 20 - 20;
console.log(coercionExp1);

// first 2 will be like number (becaus of -) and then concat
// 100 - 20 + "30" =  80 + "30" =  "8030"
var coercionExp2 = "100" - "20" + "30"; // Coercion
console.log(coercionExp2);

// first 2 will be like number (becaus of -) and then add 30
// 100 - 20 + 30 =  80 + 30 =  110
var coercionExp2 = "100" - "20" + 30; // Coercion
console.log(coercionExp2);

// first 2 will be like number (becaus of -) and then add 30
// 100 - 20 + 30 =  80 + 30 =  110
var coercionExp3 = "100" + "20" - 30; // Coercion
console.log(coercionExp3);


var a = 2,
  b = 3,
  c = 4;
//a = b = c = a; // Right to Left Associativity
a = b = c; // Right to Left Associativity
console.log(a);
console.log(b);
console.log(c);

// var x = null;
// var x = false;
var x;
if (x) {
  console.log("x is defined");
} else {
  console.log("x is not defined");
}
