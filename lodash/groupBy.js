//https://lodash.com/docs/4.17.4#groupBy
/**
_.groupBy
- Create a function that takes two parameters: the first parameter is an array, the second parameter is a function
- Create an empty object literal.
- Loop through the array.
- For each element of array, compute a value by calling the second parameter of the outer function with the element.
- Use computed value as a key. If the outside object literal does not contain the key, set to a new empty array.
- Push the element to the corresponding array of the outside object literal

_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }

*/
function groupBy(collection, func) {
  var result = {};
  collection.forEach(function(element) {
    var key = func.call(this, element);
    console.log(key);
    if (result[key] === undefined) {
      result[key] = [];
    }
    result[key].push(element);
  });
  return result;
}

function length(value) {
  return value.length;
}
console.log(groupBy(['one', 'two', 'three'], length));
console.log(groupBy([6.5, 7.5, 9.2, 6.3, 7.9], Math.floor));
