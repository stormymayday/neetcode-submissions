class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Maps to track seen values in each row, column, and 3x3 box
        const rowMap = new Map(); // Tracks digits in each row
        const colMap = new Map(); // Tracks digits in each column
        const boxMap = new Map(); // Tracks digits in each 3x3 box

        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                const currentVal = board[row][col];

                // if value is empty (dot)
                if(currentVal === '.') {
                    // skip to the next iteration
                    continue;
                }

                // Initialize Sets for this row if not already done
                if(!rowMap.has(row)) {
                    rowMap.set(row, new Set());
                }

                // Initialize Sets for this column if not already done
                if(!colMap.has(col)) {
                    colMap.set(col, new Set());
                }

                // Create a key for the current 3x3 box and initialize its Set if needed
                const boxKey = `${Math.floor(row/3)}x${Math.floor(col/3)}`;
                if(!boxMap.has(boxKey)) {
                    boxMap.set(boxKey, new Set());
                }

                // Check if this value violates any Sudoku constraint
                if(rowMap.get(row).has(currentVal) || 
                   colMap.get(col).has(currentVal) || 
                   boxMap.get(boxKey).has(currentVal)) {
                    return false;
                } else {
                    // Add the value to all relevant tracking Sets
                    rowMap.get(row).add(currentVal);
                    colMap.get(col).add(currentVal);
                    boxMap.get(boxKey).add(currentVal);
                }
            }
        }

        return true;
    }
}