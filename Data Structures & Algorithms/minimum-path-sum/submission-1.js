class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid, r = 0, c = 0, memo = {}) {
        const key = `${r},${c}`;

        if(key in memo) {
            return memo[key];
        }

        if(r === grid.length || c === grid[0].length) {
            return Infinity;
        }

        if(r === grid.length - 1 && c === grid[0].length - 1) {
            return grid[r][c];
        }

        memo[key] = grid[r][c] + Math.min(this.minPathSum(grid, r + 1, c, memo), this.minPathSum(grid, r, c + 1, memo));

        return memo[key];

    }
}
