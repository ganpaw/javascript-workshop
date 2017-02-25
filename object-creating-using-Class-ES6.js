class Deal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  toString() {
    return this.title + ',' + this.price;
  }
}

class DealsCandy extends Deal {
  constructor(title, price, type) {
    super(title, price);
    this.type = type || "VANIALLA";
  }
  toString() {
    console.log("toString invoked");
    return this.title + ',' + this.price + ' -- ' + this.type;
  }
}

var deal = new Deal('Nexus 5', 249.99);

console.log(deal);

var dealscandy = new DealsCandy('Nexus 6', 392.99);
console.log(dealscandy.toString());
