const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let a = domains.map(el => el.split('.').reverse().map(el => '.' + el));
  let b = [];

  for(let el of a) {
    let res = '';
    for(let i of el) {res = res + i;
      b.push(res);
    }
  }

  let c = b.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  return c;
}

module.exports = {
  getDNSStats
};

/* function getDNSStat(domains) {
  let a = domains.map(el => el.split('.').reverse().map(el => '.' + el));
  let b = [];

  for(let el of a) {
    let res = '';
    for(let i of el) {res = res + i;
      b.push(res);
    }
  }

  console.log(b.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {}));
}

getDNSStat(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']); */