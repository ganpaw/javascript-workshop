//http://ryanmorr.com/understanding-scope-and-context-in-javascript/
'use strict'
var person = {
  fullname: "Pawanpreet",
  getName: function() {
    console.log(this);
    return this.fullname;
  }
}

console.log(person.getName());
var getNaam = person.getName;

console.log(getNaam()); // undefined
console.log(getNaam.call(person)); // Pawanpreet
