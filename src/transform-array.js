const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  } else {
    /* const firstStep = arr.filter((el, i) => arr[i+1] !== '--discard-prev' && arr[i-1] !== '--discard-next');
    const secondStep = firstStep.map((el, i) => el === '--double-prev' && i > 0 ? firstStep[i-1] : el && el === '--double-next' && i < firstStep.length - 1 ? firstStep[i+1] : el);
    const lastStep = secondStep.filter(el => el !== '--discard-prev' && el !== '--discard-next' && el !== '--double-prev' && el !== '--double-next');
    return lastStep; */
    const newArr = arr.filter((el, i) => arr[i+1] !== '--discard-prev' && arr[i-1] !== '--discard-next').map((el, i) => el === '--double-prev' && i > 0 ? arr[i-1] : el && el === '--double-next' && i < arr.length - 1 ? arr[i+1] : el).filter(el => el !== '--discard-prev' && el !== '--discard-next' && el !== '--double-prev' && el !== '--double-next');

    return newArr;
  }
}

module.exports = {
  transform
};

/* function transfor(arr) {
  

  if(!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  } else {
    const firstStep = arr.filter((el, i) => arr[i+1] !== '--discard-prev' && arr[i-1] !== '--discard-next').filter(el => el !== '--discard-prev' && el !== '--discard-next');
    const secondStep = firstStep.map((el, i) => el === '--double-prev' && i > 0 ? firstStep[i-1] : el && el === '--double-next'? firstStep[i+1] : el).filter(el => el !== '--double-prev' && el !== '--double-next');
    console.log(secondStep);
  }
}

transfor(['--double-prev', 1, 2, 3]); */