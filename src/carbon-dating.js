const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string') {
    return false;
  }

  const n = +sampleActivity;
  const t = (Math.log(MODERN_ACTIVITY / n)) / (Math.log(2) / HALF_LIFE_PERIOD);

  if(n > 15 || n <= 0 || isNaN(n)) {
    return false;
  } else {
    return Math.ceil(t);
  }
}

module.exports = {
  dateSample
};



/* function datSample(sA) {
  const n = +sA;
  const t = (Math.log(15 / n)) / (Math.log(2) / 5730);

  if(n > 15 || n <= 0 || isNaN(n)) {
    console.log(false);
  } else {
    console.log(Math.ceil(t));
  }
  
}

datSample('1'); */