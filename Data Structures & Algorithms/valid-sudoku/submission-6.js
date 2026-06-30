class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Using a single Set to track all constraints with string-based keys
        const hashSet = new Set();

        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                const currentVal = board[row][col];

                // Skip empty cells
                if(currentVal === '.') {
                    continue;
                }

                // Check for violations in row, column, or 3x3 box
                if(
                    // Check if this value already exists in the current row
                    hashSet.has(`${currentVal} in row ${row}`) ||
                    // Check if this value already exists in the current column
                    hashSet.has(`${currentVal} in col ${col}`) ||
                    // Check if this value already exists in the current 3x3 box
                    hashSet.has(`${currentVal} in box ${Math.floor(row/3)}x${Math.floor(col/3)}`)
                ) {
                    return false;
                } else {
                    // Add this value to all relevant constraint sets
                    hashSet.add(`${currentVal} in row ${row}`);
                    hashSet.add(`${currentVal} in col ${col}`);
                    hashSet.add(`${currentVal} in box ${Math.floor(row/3)}x${Math.floor(col/3)}`);
                }
            }
        }

        return true;
    }
}
