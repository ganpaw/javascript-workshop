// Use Function Constructor for creating Object
function Deal(title, price, store, type) {
  console.log(this);
  this.title = title;
  this.price = price;
  this.store = store;
  this.type = type || "SALE";
  //console.log("Deal function constructor has been invoked.");

  // Note: Better to define your methods in prototype
  // which will occupy only one location in memory instead of having
  // every single object which will waste space.
  this.getTitle = function() {
    return this.title;
  }
  this.getPrice = function() {
    return this.price;
  }
  this.getStore = function() {
    return this.store;
  }
  this.getType = function() {
    return this.type;
  }
  //return; valid but no need to return or that will override the actual object.
}

var deal = new Deal('Nexus 6', 399.99, 'Google');
console.log('Display "deal" object:');
console.log(deal);
console.log(' ');
console.log('Display "deal" object toString which in Object default:');
console.log(deal.toString());
console.log(' ');
console.log('Display prototype of "deal" object');
console.log(Object.getPrototypeOf(deal));

console.log(' ');
console.log('----Adding property/method to "deal" object --------');
//http://www.w3schools.com/js/js_object_prototypes.asp
// Adding property/method to deal Object (it will effect deal object only)
deal.originalprice = 499.99;
console.log(deal);
console.log(' ');
console.log("Let us try another 'deal1' object and see if that has originalprice, and no'");
var deal1 = new Deal('Samsung S5', 299.99, 'Ebay');
console.log(deal1);
console.log(' ');
console.log('--Add property/method to prototype so that any object can access---');
// Adding property/method to Deal's prototype (it is like extending Class)
/**
 Now 'prototype' is a hidden property of Function constructor
 which can hold the prototype of any object created from that
 Function constructor.
*/
console.log(Deal.prototype);
Deal.prototype.URL = "http://www.deals2020.com"
Deal.prototype.getURL = function() {
  return this.URL;
};
Deal.prototype.toString = function() {
  return '[' + this.title + ', $' + this.price + ', ' + this.store + ']';
};
// Make sure it is called after above because we are have
// expression which gets assigned at execution context runtime.
console.log('url:' + deal.getURL());
console.log('toString ' + deal.toString()); // override Object toString

console.log('url:' + deal1.getURL());
console.log('toString ' + deal1.toString());
console.log('--------------------------------');



Simulate the Function constructor

function DealConstructor(title, price, store, type) {
  var empty = {}; // seems like what 'new' does
  empty.title = title;
  empty.price = price;
  empty.store = store;
  empty.type = type || "VANILLA";

  return empty;
  // return {
  //   title: title,
  //   price: price,
  //   store: store,
  //   type: type || "SALE"
  // }
}
var deal = DealConstructor('Thinkpad T420', 599.99, 'Lenovo');
console.log(deal);
(deal);



// function a() {}
//
// function b() {}
//b.prototype = new a();
// var b1 = new b();
//
// console.log("b1 instanceof b :" + (b1 instanceof b));
// console.log('b instanceof a :' + (b1 instanceof a));
// console.log('b1 instanceof Object :' + (b1 instanceof Object));
