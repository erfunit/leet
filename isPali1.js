/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // let p2 = '';
  // let p1 = '';
  let isPali = true;

  if (!s.trim()) return false;

  const formattedStr = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const halfLength = Math.floor(formattedStr.length / 2);

  console.log(formattedStr);

  for (let i = 0; i <= halfLength; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - (i + 1)]) {
      isPali = false;
      break;
    }
  }

  return isPali;
};

console.log(isPalindrome("0P"));
