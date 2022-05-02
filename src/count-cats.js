const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let m = matrix.flat().filter(i => i == '^^');
  return m.length;
}

module.exports = {
  countCats
};

/* function counCats(matrix) {
  let m = matrix.flat().filter(i => i == '^^');
  console.log(m.length);
}

counCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]); */