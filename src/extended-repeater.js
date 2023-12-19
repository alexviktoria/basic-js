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
function repeater(str, options) {
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;

  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }

  if (options.separator !== undefined) {
    separator = options.separator;
  } else {
    separator = '+';
  }

  if (options.addition !== undefined) {
    addition = String(options.addition);
  } else {
    addition = '';
  }

  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  if (options.additionSeparator !== undefined) {
    additionSeparator = options.additionSeparator;
  } else {
    additionSeparator = '|';
  }

  const repeatedStrings = [];

  for (let i = 0; i < repeatTimes; i++) {
    let repeatedString = str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatedString += addition;

      if (j !== additionRepeatTimes - 1) {
        repeatedString += additionSeparator;
      }
    }

    repeatedStrings.push(repeatedString);
  }

  return repeatedStrings.join(separator);
}

module.exports = {
  repeater
};
