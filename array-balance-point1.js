function balancePoint(array) {
  var totalSum = 0;
  for (var i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  console.log('totalSum :' + totalSum);

  var leftSum = 0;
  var balancePointIndex = -1;
  for (var i = 0; i < array.length; i++) {
    var currentValue = array[i];
    if (i > 0) {
      leftSum += array[i - 1];
    }
    var rightSum = totalSum - leftSum - currentValue;

    if (rightSum == leftSum) {
      balancePointIndex = i;
      break;
    }
  }
  console.log('balancePointIndex :' + balancePointIndex);
}

//var index = balancePoint([2, 4, 5, -3, 8, 9, -1]);
//var index = balancePoint([3, -2, 0, 4, 6, -5]);
//var index = balancePoint([1, 0, 0, 1]);
//var index = balancePoint([2, -1, 1, -1, 1]);
var index = balancePoint([-4, -7, 6, 2, 9, -3]);


// Using array.reduce : https://miguelmota.com/bytes/array-balance-points/
// function balancePoint(array) {
//   if (!Array.isArray(array)) {
//     return -1;
//   }
//
//   var sum = function(total, num) {
//     //console.log(total + num);
//     return total + num;
//   }
//   var totalSum = array.reduce(sum, 0);
//   console.log("totalSum " + totalSum);
//   var leftSum = 0;
//
//   var index = array.reduce(function(balancePointIndex, currentValue, i) {
//     console.log("1." + balancePointIndex + "," + currentValue + "," + i);
//     if (i > 0) {
//       console.log("2.");
//       leftSum += array[i - 1];
//       console.log('leftSum:' + leftSum);
//     }
//
//     var rightSum = totalSum - leftSum - currentValue;
//     console.log('rightSum :' + rightSum);
//     if (leftSum === rightSum) {
//       console.log("4.");
//       balancePointIndex = i;
//     }
//     return balancePointIndex;
//   }, []);
//
//   if (index == '') {
//     index = -1;
//   }
//   return index;
// }


//var index = balancePoints([3, -2, 0, 4, 6, -5]);
//var index = balancePoints([1, 0, 0, 1]);
//var index = balancePoints([2, -1, 1, -1, 1]);
//var index = balancePoints([-4, -7, 6, 2, 9, -3]);
//console.log('Balance Point :' + index);
//var index = balancePoints([-4, -7, 6, 2, 9, -3]);
//console.log('Balance Point :' + index);
