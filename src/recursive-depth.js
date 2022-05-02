const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let acc = 0;
    if(Array.isArray(arr)) {
      acc = 1 + Math.max(0, ...arr.map(el => this.calculateDepth(el)));
    }
    
    return acc;
  }
}

module.exports = {
  DepthCalculator
};

/* function calculatDepth(arr){
    let acc = 0;

    for (let el of arr) {
      if (Array.isArray(el)) {
        this.calculateDepth(el) < acc ? acc = acc : acc = this.calculateDepth(el);
      }
    }
    console.log(acc + 1);
}

calculatDepth([[[]]]); */