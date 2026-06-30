class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        // checking rows
        for(let row = 0; row < 9; row++) {
            const rowSet = new Set();
            for(let col = 0; col < 9; col++) {
                
                if(board[row][col] === '.') {
                    continue;
                }
                if(rowSet.has(board[row][col])) {
                    return false;
                } else {
                    rowSet.add(board[row][col]);
                }
            }
        }

        // checking columns
        for(let col = 0; col < 9; col++) {
            const colSet = new Set();
            for(let row = 0; row < 9; row++) {
                if(board[row][col] === '.') {
                    continue;
                }
                if(colSet.has(board[row][col])) {
                    return false;
                } else {
                    colSet.add(board[row][col]);
                }
            }
        }

        // Checking 3x3 sub-squares
        for(let row = 0; row < 9; row+=3) {
            for(let col = 0; col < 9; col += 3) {

                const subSquareSet = new Set();

                for(let subRow = 0; subRow < 3; subRow++) {
                    for(let subCol = 0; subCol < 3; subCol++) {
                        const cell = board[row + subRow][col + subCol];
                        if(cell === '.') {
                            continue;
                        }
                        if(subSquareSet.has(cell)) {
                            return false;
                        } else {
                            subSquareSet.add(cell);
                        }
                    } 
                }

            }
        }

         return true;

    }
}
