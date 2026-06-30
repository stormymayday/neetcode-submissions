class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        // Matrix Dimensions
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        // First Binary Search: find the target row
        let topRow = 0;
        let bottomRow = ROWS - 1;
        while(topRow <= bottomRow) {

            const middleRow = Math.floor((topRow + bottomRow) / 2);

            if(target > matrix[middleRow][COLS - 1]) {
                // If the target is greater than the largest element in the row
                topRow = middleRow + 1;
            } else if(matrix[middleRow][0] > target) {
                // if the target is smaller than the smallest element in the row
                bottomRow = middleRow - 1;
            } else {
                // target is within the current row
                break;
            }

        }

        // Check if the target row exists (row pointers have crossed)
        if((topRow > bottomRow)) {
            return false;
        }

        // Second Binary Seach: through the target row
        const targetRow = Math.floor((topRow + bottomRow)/2);
        let left = 0;
        let right = COLS - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(matrix[targetRow][mid] > target) {
                right = mid - 1;
            } else if(matrix[targetRow][mid] < target) {
                left = mid + 1;
            } else {
                return true;
            }
        }

        // Not found in the target row
        return false;

    }
}
