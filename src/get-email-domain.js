const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let rev = email.split('').reverse();
  let i = rev.indexOf('@');

  return rev.join('').slice(0, i).split('').reverse().join('');
}

module.exports = {
  getEmailDomain
};

/* function getEmailDomai(email) {
  let rev = email.split('').reverse();
  let i = rev.indexOf('@');

  console.log(i);
  console.log(rev.join('').slice(0, i).split('').reverse().join(''));
}

getEmailDomai('prettyandsimple@example.com'); */