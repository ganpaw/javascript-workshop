var SimpleObserver = function() {
  this.observers = [];

  self = this;
  this.subscribe = function(param) {
    self.observers.push(param);
    return function() {
      var index = self.observers.indexOf(param);
      if (index > -1) {
        self.observers.splice(index, 1);
      }
    }
  }
  // this.unsubscribe = function(observer) {
  //   var index = this.observers.indexOf(observer);
  //   if (index > -1) {
  //     this.observer.splice(index, 1);
  //   }
  // }
  this.notify = function(value) {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i](value);
    }
  }
}
var observer = new SimpleObserver();
var unsubscribe = observer.subscribe(function(val) {
  console.log('1st', val);
}); //Adds 1st handler
observer.notify(1); //Calls 1st handler, passing in 1 as the argument
observer.subscribe(function(val) {
  console.log('2nd', val);
}); //Adds 2nd handler
observer.notify(2); //Calls both 1st and second handler, passing in 2 as the argument
unsubscribe(); //Removes the 1st handler
observer.notify(3); //Calls only the 2nd handler, passing in 3 as the argument
