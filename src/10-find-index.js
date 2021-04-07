/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let from = 0;
  let to = array.length - 1;
  let i;
  do {
    i = Math.floor((from + to) / 2);
    if (array[i] < value) {
      from = i + 1;
    } else if (array[i] > value) {
      to = i - 1;
    }
  } while (array[i] !== value);
  return i;
}

module.exports = findIndex;
