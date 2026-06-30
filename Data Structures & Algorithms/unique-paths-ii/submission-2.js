class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid, r = 0, c = 0, memo = {}) {

        const key = `${r},${c}`;

        if(key in memo) {
            return memo[key]
        }

        if(r === grid.length || c === grid[0].length) {
            return 0;
        }

        if(grid[r][c] === 1) {
            return 0;
        }

        if(r === grid.length - 1 && c === grid[0].length - 1) {
            return 1;
        }

        memo[key] = this.uniquePathsWithObstacles(grid, r + 1, c, memo) + this.uniquePathsWithObstacles(grid, r, c + 1, memo)

        return memo[key];

    }
}
