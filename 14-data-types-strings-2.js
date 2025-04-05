/*
Write a function checkSpam(str)
that returns true if str contains ‘viagra’
or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
  let result = str.toLowerCase();
  return  result.includes('viagra') || result.includes('xxx');
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));
