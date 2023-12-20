const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // const filtered = arr.filter(element => element !== -1);
  //  const sorted = filtered.sort((a, b) => a - b);
  // return arr.map(element => element === -1 ? -1 : sorted.shift());

const filtered = arr.filter(element => element !== -1);
const sorted = filtered.sort((a, b) => a - b);

let index = 0;
const result = arr.map(element => {
  if (element === -1) {
    return -1;
  } else {
    return sorted[index++];
  }
});

return result;
}

module.exports = {
  sortByHeight
};
