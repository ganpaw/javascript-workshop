/** Ref:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Basics
 https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, 
 there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).
*/
var a;
console.log("The value of a is " + a); // logs "The value of a is undefined"
//console.log("The value of b is " + b); // throws ReferenceError exception

if (typeof a === 'undefined'){
	console.log("a is undefined");
}
if (a === undefined){
	console.log("a is declared but is undefined");	
}

//or check b is undefined (means it is not even decalred using var/let)
if (typeof b === 'undefined'){
	console.log("b is undefined");
}

// The undefined value behaves as false when used in a boolean context. 
var d;
if (!d){
	console.log(d);
}

// The undefined value converts to NaN when used in numeric context.
var c;
if (c === undefined){
	console.log("c is undefined");
}
console.log(c);
// Adding NaN to any number will result in NaN
console.log(c+2);

/**
 The value null is a JavaScript literal representing null or an "empty" value, 
 i.e. no object value is present. It is one of JavaScript's primitive values.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

 When you evaluate a null variable, the null value behaves as 0 in numeric contexts and
 as false in boolean contexts. For example:
*/
var obj = null;
console.log (window.obj);
console.log(2+obj);

if (!obj){
	console.log(obj);
}

console.log(typeof null);// object (bug in ECMAScript, should be null)
console.log(typeof undefined); // undefined
console.log(null === undefined); // false
console.log(null == undefined);// true


// Constant using 'const'
const STATUS_CODE = 202;
console.log(STATUS_CODE); 
STATUS_CODE=300; // no effect
console.log(STATUS_CODE);

console.log("37"+7); // 377
console.log("37"-7);// 30

console.log(parseInt("37.9")+7); // 44
console.log(parseFloat("37.9")+7); // 44.9


var sales = "Toyota";

function carTypes(name) {		
  helper = function(){
  //name = "Pawan";
  if (name == "Honda") {  	
  	console.log("invoked");
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
 }
 return helper;
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar());  // Honda
console.log(car.special); // Toyota


// It seems undefined is declared as const and unable to change its value
var undefined = "pawan"
var iamundefined = undefined;
console.log(iamundefined);

// Reference Error
//null = 10;


var poem = "Eh kehe din aayea ni jinde, eh kehre din aayea,\n\
gal pauna di paa ke gaani, chetar turea jaae ni jindi.. eh kehe din ayea...."

console.log(poem);