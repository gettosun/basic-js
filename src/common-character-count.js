const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a = s1.split('');
  const b = s2.split('');
  const c = [];

  for(let i of a) {
    if(b.includes(i)) {
      let n = b.indexOf(i);
      c.push(i);
      b.splice(n, 1)
    }
  }
  return c.length;
}

module.exports = {
  getCommonCharacterCount
};


/* function func(s1, s2) {
  const a = s1.split('');
  const b = s2.split('');
  const c = [];

  for(let i of a) {
    if(b.includes(i)) {
      let n = b.indexOf(i);
      c.push(i);
      b.splice(n, 1)
    }
  }
  console.log(c.length);
}
func("aabcc", "adcaa"); */