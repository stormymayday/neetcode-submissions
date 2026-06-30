class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        const rowSet = new Set();
        const colSet = new Set();

        for(let row = 0; row < ROWS; row += 1) {
            for(let col = 0; col < COLS; col += 1) {
                if(matrix[row][col] === 0) {
                    rowSet.add(row);
                    colSet.add(col);
                }
            }
        }

        for(const row of rowSet) {
            for(let col = 0; col < COLS; col += 1) {
                matrix[row][col] = 0;
            }
        }

        for(const col of colSet) {
            for(let row = 0; row < ROWS; row += 1) {
                matrix[row][col] = 0;
            }
        }

    }
}
