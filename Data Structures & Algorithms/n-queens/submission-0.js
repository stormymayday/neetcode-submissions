class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const colSet = new Set();
        const posDiagSet = new Set();
        const negDiagSet = new Set();
        const result = [];
        // const board = new Array(n).fill(new Array(n).fill('.'));
        const board = [];
        for(let i = 0; i < n; i += 1) {
            board[i] = new Array(n).fill('.');
        }
        function helper(row) {
            if(row === n) {
                result.push(board.map(row => row.join("")));
                return;
            }
            for(let col = 0; col < n; col += 1) {
                if(!colSet.has(col) && !posDiagSet.has(row + col) && !negDiagSet.has(row - col)) {
                    // Choose to place Queen at this position
                    colSet.add(col);
                    posDiagSet.add(row + col);
                    negDiagSet.add(row - col);
                    board[row][col] = 'Q';
                    // Explore this choice
                    helper(row + 1);
                    // Backtrack
                    board[row][col] = '.';
                    colSet.delete(col);
                    posDiagSet.delete(row + col);
                    negDiagSet.delete(row - col);
                }
            }
        }
        helper(0);
        return result;
    }
}
