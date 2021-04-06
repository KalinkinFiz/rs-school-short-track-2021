/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const transposed = matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  let res = 0;
  transposed.forEach((row) => {
    let i = 0;
    while (i < row.length && row[i] > 0) {
      res += row[i];
      i++;
    }
  });
  return res;
}

module.exports = getMatrixElementsSum;
