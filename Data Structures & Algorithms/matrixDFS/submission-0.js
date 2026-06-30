class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        return this.matrixDFSwithBacktracking(grid, 0, 0, new Set());
    }

    matrixDFSwithBacktracking(grid, r, c, visited) {
        // Base Case 1: out of bounds check
        const rowInBounds = 0 <= r && r < grid.length;
        const colInBounds = 0 <= c && c < grid[0].length;
        if(rowInBounds === false || colInBounds === false) {
            return 0;
        }

        // Base Case 2: visited
        const position = `${r},${c}`;
        if(visited.has(position)) {
            return 0;
        }

        // Base Case 3: obsticle
        if(grid[r][c] === 1) {
            return 0;
        }

        // Base Case 4: reached destination (bottom-right corner)
        if(r === grid.length - 1 && c === grid[0].length - 1) {
            return 1; // Found one valid path!
        }

        visited.add(position);

        let count = 0;
        count += this.matrixDFSwithBacktracking(grid, r - 1, c, visited);
        count += this.matrixDFSwithBacktracking(grid, r + 1, c, visited);
        count += this.matrixDFSwithBacktracking(grid, r, c - 1, visited);
        count += this.matrixDFSwithBacktracking(grid, r, c + 1, visited);

        // Backtracking
        visited.delete(position);

        return count;
    }
}
