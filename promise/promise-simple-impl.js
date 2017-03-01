var MyPromise = function(funct) {
  self = this;
  self.callbacks = [];
  self.errorCallbacks = [];
  funct.call(this);
}
MyPromise.prototype = {
  callbacks: null,
  errorCallbacks: null,
  status: 'PENDING',
  then: function(callback) {
    this.callbacks.push(callback);
    return this;
  },
  catch: function(errorCallback) {
    this.errorCallbacks.push(errorCallback);
  },
  resolve: function(data) {
    this.data = data;
    this.status = "RESOLVED";
    this.callbacks.forEach(function(callbackFunc) {
      // console.log(callbackFunc);
      // console.log(data);
      callbackFunc.call(null, data);
    });
  },
  reject: function(error) {
    this.error = error;
    this.status = "REJECTED";
    this.errorCallbacks.forEach(function(errorCallbackFunc) {
      errorCallbackFunc.call(null, error);
    });
  }
}

var logic = false;
var firstPromise = new MyPromise(function(resolve) {
  console.log(status);
  setTimeout(function() {
    if (logic) {
      self.resolve({
        message: "We have received data"
      });
    } else {
      var error = new Error("somthing wrong happened.")
      self.reject(error);
    }
  }, 1000);
});
firstPromise.then(function(fullfilled) {
  console.log(fullfilled);
}).catch(function(error) {
  console.log(error.message);
});
