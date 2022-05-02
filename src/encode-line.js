const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for(let i = 0; i < str.length; i++) {
    let acc = 1;
    while(str[i] === str[i+1]) {
      acc++;
      i++;
    }
    res += acc + str[i];
  }
  return res.replaceAll('1', '');
}

module.exports = {
  encodeLine
};

/* function encodeLin(str) {
  let res = '';
  for(let i = 0; i < str.length; i++) {
    let acc = 1;
    while(str[i] === str[i+1]) {
      acc++;
      i++;
    }
    res += acc + str[i];
  }
  console.log(res.replaceAll('1', ''));
}

encodeLin('aabbbca'); */