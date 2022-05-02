const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const x = matrix[0].length,
        y = matrix.length;
  let res = 0;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (matrix[j][i] !== 0) {
        res += matrix[j][i];
      } else {
        break;
      }
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};

/* function getMatrixElementsSu(matrix) {
  const x = matrix[0].length,
        y = matrix.length;
  let res = 0;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (matrix[j][i] !== 0) {
        res += matrix[j][i];
      } else {
        break;
      }
    }
  }
  console.log(res);
}

getMatrixElementsSu([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]); */