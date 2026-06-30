class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // rows
        for(let row = 0; row < 9; row++) {
            const rowSet = new Set();
            for(let col = 0; col < 9; col++) {
                const cell = board[row][col];
                // forgot this
                if(cell === '.') {
                    continue;
                }
                if(rowSet.has(cell)) {
                    return false;
                } else {
                    rowSet.add(cell);
                }
            }
        }

        // cols
        for(let col = 0; col < 9; col++) {
            const colSet = new Set();
            for(let row = 0; row < 9; row++) {
                const cell = board[row][col];
                // forgot this
                if(cell === '.') {
                    continue;
                }
                if(colSet.has(cell)) {
                    return false;
                } else {
                    colSet.add(cell);
                }
            }
        }

        // 3x3 grids (issue is here)
        for(let row = 0; row < 9; row+=3) {
            for(let col = 0; col < 9; col+=3) {

                const subGridSet = new Set();
                for(let subRow = 0; subRow < 3; subRow++) {
                    for(let subCol = 0; subCol < 3; subCol++) {
                        // error here 
                        const cell = board[row + subRow][col + subCol];
                        // forgot this
                        if(cell === '.') {
                            continue;
                        }
                        if(subGridSet.has(cell)) {
                            return false;
                        } else {
                            subGridSet.add(cell);
                        }
                    }
                }

            }
        }

        return true;

    }
}
