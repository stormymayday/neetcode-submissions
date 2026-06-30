class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Check each row for duplicates
        for(let row = 0; row < 9; row++) {
            const rowSet = new Set();
            for(let col = 0; col < 9; col++) {
                const cell = board[row][col];
                // Skip empty cells (marked as '.')
                if(cell === '.') {
                    continue;
                }
                // If we've seen this number before in this row, the board is invalid
                if(rowSet.has(cell)) {
                    return false;
                } else {
                    // Otherwise, add this number to our set of seen numbers
                    rowSet.add(cell);
                }
            }
        }

        // Check each column for duplicates
        for(let col = 0; col < 9; col++) {
            const colSet = new Set();
            for(let row = 0; row < 9; row++) {
                const cell = board[row][col];
                // Skip empty cells
                if(cell === '.') {
                    continue;
                }
                // If we've seen this number before in this column, the board is invalid
                if(colSet.has(cell)) {
                    return false;
                } else {
                    // Otherwise, add it to our set of seen numbers
                    colSet.add(cell);
                }
            }
        }

        // Check each 3x3 subgrid for duplicates
        // We start at the top-left corner of each subgrid (positions 0,0 then 0,3 then 0,6, etc.)
        for(let row = 0; row < 9; row+=3) {
            for(let col = 0; col < 9; col+=3) {
                // New set for each 3x3 subgrid
                const subGridSet = new Set();
                // Iterate through each cell in the current 3x3 subgrid
                for(let subRow = 0; subRow < 3; subRow++) {
                    for(let subCol = 0; subCol < 3; subCol++) {
                        // Calculate the actual position in the board using offsets
                        // This is a key part of the logic - we add the subgrid's starting position (row,col)
                        // to the relative position within the subgrid (subRow,subCol)
                        const cell = board[row + subRow][col + subCol];
                        // Skip empty cells
                        if(cell === '.') {
                            continue;
                        }
                        // If we've seen this number before in this subgrid, the board is invalid
                        if(subGridSet.has(cell)) {
                            return false;
                        } else {
                            // Otherwise, add it to our set of seen numbers
                            subGridSet.add(cell);
                        }
                    }
                }
            }
        }

        // If we've passed all checks, the board is valid
        return true;
    }
}
