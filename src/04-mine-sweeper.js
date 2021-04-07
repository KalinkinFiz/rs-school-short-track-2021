/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const [height, width] = [matrix.length, matrix[0].length];
  const res = Array(height).fill().map(() => Array(width).fill(0));
  const inField = (x, y) => !(x < 0 || x === width || y < 0 || y === height);

  const countAdjMines = (x, y) => {
    let num = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (inField(x + dx, y + dy) && (dx || dy)) {
          num += matrix[y + dy][x + dx];
        }
      }
    }
    return num;
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      res[y][x] = countAdjMines(x, y);
    }
  }
  return res;
}

module.exports = minesweeper;
