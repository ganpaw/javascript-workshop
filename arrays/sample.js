// Math
function findMin(numbers) {
  return Math.min.apply(null, numbers);
}

function findMax(numbers) {
  return Math.max.apply(null, numbers);
}
//document.getElementById("demo").innerHTML = Math.min(0, 150, 30, 20, -8, -200);
console.log(findMin([0, 150, 30, 20, -8, -100]));
console.log(findMax([0, 150, 30, 20, -8, -100]));


// -------------- map, filter and reduce
var numbers = [4, 9, 16, 25];

function isEven(number) {
  return (number % 2 == 0)
}

function sum(total, number) {
  return total + number;
}

var result = numbers.map(Math.sqrt).filter(isEven).reduce(sum);

// ------- array
Array.apply(null, Array(5));
