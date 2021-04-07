/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('').map((el) => +el);
  const min = Math.min(...digits);
  digits.splice(digits.indexOf(min), 1);
  return +digits.join('');
}

module.exports = deleteDigit;
