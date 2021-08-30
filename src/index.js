module.exports = function solveSudoku(matrix) {


  function solve() {

    let position = findZero();

    if (!position) {
      return true;
    }

    let [row, col] = position;

    for (let i = 1; i <= 9; i++) {
      let isUniq = true;

      if (matrix[row].includes(i)) {

        isUniq = false;
      }
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][col] === i) {
          isUniq = false;
        }
      }
      let boxRow = Math.floor(row / 3) * 3;
      let boxCol = Math.floor(col / 3) * 3;

      for (let row1 = boxRow; row1 < boxRow + 3; row1++) {
        for (let col1 = boxCol; col1 < boxCol + 3; col1++) {
          if (matrix[row1][col1] === i) {
            isUniq = false;
          }
        }
      }

      if (isUniq) {
        matrix[row][col] = i;

        if (solve()) {
          return true;
        }
        matrix[row][col] = 0;

      }

    }
    return false;
  }


  function findZero() {
    for (let row = 0; row < matrix.length; row++) {
      let col = matrix[row].indexOf(0)
      if (col !== -1) {
        return [row, col];
      }
    }
    return null;
  }

  solve();
  return matrix;

}




