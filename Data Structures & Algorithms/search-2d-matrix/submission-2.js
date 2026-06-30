class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        for(let i = 0; i < matrix.length; i++) {

            for(let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] === target) {
                    return true;
                }
            }

        }

        return false;

    }
}
