const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const maxNum = Math.max(...str.split('').map((el, i) => el = str.slice(0, i) + str.slice(i + 1)));
  
  return maxNum;
}

module.exports = {
  deleteDigit
};

/* function deleteDigi(n) {
  const str = String(n);
  const maxNum = Math.max(...str.split('').map((el, i) => el = str.slice(0, i) + str.slice(i + 1)));
  
  
  console.log(maxNum);
}

deleteDigi(152); */

