function doAsync(param) {
  setTimeout(param, 1000);
  return {
    then: function(param) {
      setTimeout(param, 1000);
      return this;
    }
  }
}

doAsync(function() {
  console.log(1);
}).then(function() {
  console.log(2);
}).then(function() {
  console.log(3);
});
