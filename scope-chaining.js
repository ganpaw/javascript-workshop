//'use strict'
b();
//nested();

function b() {
  //var myVar;
  console.log('b :' + myVar);
  //console.log(this.myVar);
  //console.log(this);
}


function a() {
  var myVar = 2;
  console.log('a :' + myVar);
  //  console.log(this);

  // try 'var nested'
  nested = function() {
    console.log("nested :" + myVar);
    console.log("nested :" + this.myVar);

    nested1 = function() {
      console.log("nested1 :" + myVar // look myVar in outer environment (nested) if not found then navigate further to a() or futher to global
        console.log("nested1 :" + this.myVar);
      }
      //nested1();
    };
    //nested();

  }

  var myVar = 1;
  console.log('global:' + myVar);
  //console.log('this.nested:' + nested); // doesn't exist yet in memory
  a();
  console.log(this.nested);
  console.log(this.nested1);
  nested();
  nested1();
  //nested1();

  function useLet() {
    let c = true;
    console.log(c);
  }
  useLet();
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }

  const PAGE_NOT_FOUND = 404;

  //PAGE_NOT_FOUND = 500;
  console.log(PAGE_NOT_FOUND);
  //
  // var number = null;
  //
  // function playSong() {
  //   alert('old number was: ' + [number] + '');
  //
  //
  //   number = '10';
  //
  //   alert('' + [number] + '');
  // }
  // playSong();
