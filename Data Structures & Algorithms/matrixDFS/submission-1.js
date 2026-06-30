class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        return this.matrixDFS(grid, 0, 0, new Set());
    }

    matrixDFS(grid, r, c, visited) {
        const rowInBounds = 0 <= r && r < grid.length;
        const colInBounds = 0 <= c && c < grid[0].length;
        if(rowInBounds === false || colInBounds === false) {
            return 0;
        }

        const position = `${r},${c}`;
        if(visited.has(position)) {
            return 0;
        }

        if(grid[r][c] === 1) {
            return 0;
        }

        if(r === grid.length - 1 && c === grid[0].length - 1) {
            return 1;
        }

        visited.add(position);

        let count = 0;
        count += this.matrixDFS(grid, r - 1, c, visited);
        count += this.matrixDFS(grid, r + 1, c, visited);
        count += this.matrixDFS(grid, r, c - 1, visited);
        count += this.matrixDFS(grid, r, c + 1, visited);

        visited.delete(position);
        return count;
    }
}
