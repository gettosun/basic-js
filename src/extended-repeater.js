const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'
}) {
  
  const subStr = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);
  const newStr = new Array(repeatTimes).fill(String(str) + subStr).join(separator);

  return newStr;
}

module.exports = {
  repeater
};


/* function repeates(str, options) {
  const STR = str.toString(),
        repTime = options.repeatTimes ? options.repeatTimes : 1,
        sep = options.separator ? options.separator.toString() : '+',
        add = options.addition ? options.addition.toString() : '',
        addRepTime = options.additionRepeatTimes ? options.additionRepeatTimes : 1,
        addSep = options.additionSeparator ? options.additionSeparator.toString() : '|';
  const newStr = ((STR + (add + addSep).repeat(addRepTime)).slice(0, -addSep.length) + sep).repeat(repTime).slice(0, -sep.length);
  
  console.log(first);
}
repeates('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }); */


