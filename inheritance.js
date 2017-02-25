var ClassA = function() {
  this.name = "class A";
  this.tick = function() {
    console.log('ClassA.tick');
  }
}

ClassA.prototype.print = function() {
  console.log(this.name);
}

var a = new ClassA();

a.print();

var inheritsFrom = function(child, parent) {
  child.prototype = Object.create(parent.prototype);
};

var ClassB = function() {

  this.parent.constructor.call(this);

  this.name = "class B";
  this.surname = "I'm the child";

  var oldtick = this.tick;
  this.tick = function() {
    console.log("ClassB.tick");
    // console.log(this);
    oldtick.call(this);
    //oldtick.bind(this)();
  }
}
ClassB.prototype = Object.create(ClassA.prototype);
ClassB.prototype.constructor = ClassB;
ClassB.prototype.parent = ClassA.prototype

var b = new ClassB();

//var b = Object.create(a);
b.print();

b.tick();
