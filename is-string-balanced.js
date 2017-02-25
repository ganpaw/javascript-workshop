function isStringBalanced(str) {

  // Initial validation
  if (str === undefined || str == null || str.length <= 0) {
    console.log("Invalid input");
    return;
  }

  console.log('String :' + str);

  // Order is important for openArr and closeArr index values
  var openArr = ['(', '{', '['];
  var closeArr = [')', '}', ']'];
  var temp = [];
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    console.log('ch :' + ch);
    if (openArr.indexOf(ch) >= 0) {
      temp.push(ch); //{{{
      console.log('=== if ====');
      console.log('openCnt :' + openCnt);
      console.log(temp);
    } else if (temp.length > 0 && closeArr.indexOf(ch) >= 0 && closeArr.indexOf(ch) == openArr.indexOf(temp[temp.length - 1])) {
      temp.splice(temp.length - 1, 1);
      console.log('=== else ====');
      console.log(temp);
    } else {
      console.log('[ERROR]: Invalid String');
      console.log(closeArr.indexOf(ch));
      console.log(temp[temp.length - 1]);
      console.log(openArr.indexOf(temp[temp.length - 1]));
      return false;
    }
  }
  console.log(temp.length);
  console.log(openCnt);
  if (temp.length > 0) {
    console.log('[FINAL ERROR]: Invalid String');
    return false;
  } else {
    console.log(str + ' is a balanced string');
    return true;
  }
}

// isStringBalanced('{{()()}}');
//isStringBalanced('{{)(}}');
//isStringBalanced('({)}');
//isStringBalanced('[({})]');
//isStringBalanced('{}([])');
console.log(isStringBalanced(" "));
//console.log(isStringBalanced('{()}[[{([])}]]'));
//console.log(isStringBalanced('{{())}}'));
