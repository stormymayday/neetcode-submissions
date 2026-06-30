class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {

        const ROWS = grid.length;
        const COLS = grid[0].length;

        let perimeter = 0;
        const visited = new Set();
        outer: for(let row = 0; row < ROWS; row += 1) {
            for(let col = 0; col < COLS; col += 1) {
                if(grid[row][col] === 1) {
                    perimeter = this.dfs(row, col, grid, visited);
                    break outer;
                }
            }
        }
        return perimeter;
    }

    dfs(row, col, grid, visited) {

        const position = `${row},${col}`;

        // Base Case 1: Out of bounds
        if(
            row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length
            ) {
            return 1;
        }

        // Base Case 2: water
        if(grid[row][col] === 0) {
            return 1;
        }

        // Base Case 3: visited
        if(visited.has(position)) {
            return 0;
        }

        visited.add(position);

        let perimeter = 0;
        perimeter += this.dfs(row - 1, col, grid, visited); // up
        perimeter += this.dfs(row, col + 1, grid, visited); // right
        perimeter += this.dfs(row + 1, col, grid, visited); // down
        perimeter += this.dfs(row, col - 1, grid, visited); // left

        return perimeter;

    }
}
