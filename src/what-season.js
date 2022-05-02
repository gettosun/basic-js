const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const season = [['winter', 11, 0, 1], ['spring', 2, 3, 4], ['summer', 5, 6, 7], ['autumn', 8, 9, 10]];

  if(!date) {
    return 'Unable to determine the time of year!';
  } else if(Object.getOwnPropertyNames(date).length > 0 || !(date instanceof Date)) {
    throw Error('Invalid date!');
  } else {
    return season.filter(i => i.includes(date.getMonth())).flat()[0];
  }
}

module.exports = {
  getSeason
};

/* function geSeason(date) {
  const season = [['winter', 11, 0, 1], ['spring', 2, 3, 4], ['summer', 5, 6, 7], ['autumn', 8, 9, 10]];

  if(!date) {
    console.log('Unable to determine the time of year!');
  } else if(Object.getOwnPropertyNames(date).length > 0
  || !(date instanceof Date)) {
    throw Error('Invalid date!');
  } else {
    console.log(season.filter(i => i.includes(date.getMonth())).flat()[0]);
  }
  
}

geSeason({}); */