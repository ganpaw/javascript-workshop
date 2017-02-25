// try call back

function httpwork(callback) {

  setTimeout(function() {
    callback(data);
  }, 2000);

  // Let us say we get this data from http
  var data = JSON.stringify({
    title: "LG Monitor",
    price: 139.29
  });

  console.log("Http work is done.");
}

httpwork(function(data) {
  console.log("Callback is getting executed now and displaying JSON");
  console.log(data);
})
