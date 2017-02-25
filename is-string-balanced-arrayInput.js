IsBalanced = function(Input) {
  // Initial validation
  if (Input === undefined || Input == null || Input.length <= 0) {
    console.log("Invalid input");
    return;
  }
  // Order is important for openArr and closeArr index values
  var openArr = ['(', '{', '['];
  var closeArr = [')', '}', ']'];
  var result = [];
  for (var index = 0; index < Input.length; index++) {
    var str = Input[index];

    if (str === undefined || str == null || str.length <= 0) {
      result.push("Invalid..");
      break;
    }

    var temp = [];
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      var invalidOrFalse = false;
      if (openArr.indexOf(ch) >= 0) {
        temp.push(ch); //{{{
      } else if (temp.length > 0 && closeArr.indexOf(ch) >= 0 && closeArr.indexOf(ch) == openArr.indexOf(temp[temp.length - 1])) {
        temp.splice(temp.length - 1, 1);
      } else if (openArr.indexOf(ch) < 0 && closeArr.indexOf(ch) < 0) {
        console.log(str + ' is Invalid');
        result.push("Invalid");
        invalidOrFalse = true;
        break;
      } else {
        console.log(str + ' is not balanced');
        result.push("False");
        invalidOrFalse = true;
        break;
      }
    }
    console.log(temp.length);
    if (temp.length == 0 && !invalidOrFalse) {
      console.log(str + ' is a balanced string');
      result.push("True");
    }
  }
  return result;
};

//var result = IsBalanced(["[({})]", "{}([])", "{()}[[{}]]"]);
//var result = IsBalanced(["{{)(}}", "({)}", ")("]);
var result = IsBalanced(["a", "/", "(A)"]);
console.log(result);
