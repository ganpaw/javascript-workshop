//http://ryanmorr.com/understanding-scope-and-context-in-javascript/

(function(global) {
  'use strict';
  var foo, bar;

  function privateMethod() {
    console.log('private method');
  }

  global.JQuery = {
    publicMethod: function() {
      console.log('public method');
    }
  };

}(window));

JQuery.publicMethod();
