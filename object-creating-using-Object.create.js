var deal = {
  title: "Default",
  price: 0,
  setTitle: function(title) {
    this.title = title;
  },
  setPrice: function(price) {
    this.price = price;
  },
  getTitle: function() {
    return this.title;
  },
  getPrice: function() {
    return this.price;
  }
}
var deal1 = Object.create(deal);
/**
Empty object with the prototype having all
properties and methods
*/
console.log(deal1);

/**
Now set your own properties and method if needed
*/
deal1.setTitle('Nexus 6');
deal1.setPrice(399.99);
deal1.toString = function() {
  return '[' + this.getTitle() + ', $' + this.getPrice()
  ']';
}

/**
This deal will have its own properties which will hide parent
object props but will use methods from parent object
which will save me memory space
*/
console.log(deal1);

var deal2 = Object.create(deal);
deal2.setTitle('Thinkpad T420');
deal2.setPrice(799.99);
console.log(deal2);




// polyfill
if (!Object.create) {
  Object.create = function(o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation' +
        ' only accepts the first parameter.');
    }

    function F() {}
    F.prototype = o;
    return new F();
  };
}
