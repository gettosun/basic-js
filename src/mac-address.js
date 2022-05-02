const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const ex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const arr = n.split('-').filter(el => el.length === 2).map(el => ex.includes(el[0]) && ex.includes(el[1]) ? el : '').filter(el => el !== '');
  
  if(arr.length !== 6) {
    return false;
  } else {
    return true;
  }
}
module.exports = {
  isMAC48Address
};

/* function isMAC48Addres(n) {
  const ex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const firstCheck = n.split('-');
  if(firstCheck.length !== 6) {
    console.log(false);
  }
  const secondCheck = firstCheck.filter(el => el.length === 2);
  if(secondCheck.length !== 6) {
    console.log(false);
  }

  const thirdCheck = secondCheck.map(el => ex.includes(el[0]) && ex.includes(el[1]) ? el : '').filter(el => el !== '');
  console.log(thirdCheck);

  console.log(ex.includes('0'));
}

isMAC48Addres('00-1B-63-84-45-E6'); */


/* function isMAC48Addres(n) {
  const ex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const arr = n.split('-').filter(el => el.length === 2).map(el => ex.includes(el[0]) && ex.includes(el[1]) ? el : '').filter(el => el !== '');
  
  console.log(arr);
}

isMAC48Addres('00-1B-63-84-45-E6'); */