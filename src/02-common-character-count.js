/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const letters = [...new Set((s1 + s2).split(''))];
  const numOfChars = (str, char) => str.split('').filter((el) => el === char).length;
  return letters.reduce((acc, el) => acc + Math.min(numOfChars(s1, el), numOfChars(s2, el)), 0);
}

module.exports = getCommonCharacterCount;
