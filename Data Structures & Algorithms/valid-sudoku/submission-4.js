class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const hashSet = new Set();

        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {

                const currentVal = board[row][col];

                if(currentVal === '.') {
                    continue;
                }

                if(
                // rows
                hashSet.has(`${currentVal} in row ${row}`) ||

                // cols
                hashSet.has(`${currentVal} in col ${col}`) ||

                // boxes
                hashSet.has(`${currentVal} in box ${Math.floor(row/3)}x${Math.floor(col/3)}`)) {
                    return false;
                } else {
                    // rows
                    hashSet.add(`${currentVal} in row ${row}`);

                    // cols
                    hashSet.add(`${currentVal} in col ${col}`);

                    // boxes
                    hashSet.add(`${currentVal} in box ${Math.floor(row/3)}x${Math.floor(col/3)}`);
                }
            }
        }

        return true;

    }
}
