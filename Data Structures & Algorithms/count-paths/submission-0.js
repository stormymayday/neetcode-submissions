class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        if(m === 0 || n === 0) {
            return 0;
        }

        if(m === 1 && n === 1) {
            return 1;
        }

        return this.uniquePaths(m - 1, n) + this.uniquePaths(m, n - 1);
    }
}
