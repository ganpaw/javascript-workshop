// Using IIFE
for (var i = 0; i < 5; i++) {
  (function(number) {
    setTimeout(function() {
      console.log(number);
    }, i * 100);
  }(i));
}

// Using Let
// for (var i = 0; i < 5; i++) {
//   let number = i;
//   setTimeout(function() {
//     console.log(number);
//   }, i * 100);
// }
