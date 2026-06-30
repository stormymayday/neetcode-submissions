class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let count = 0;
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[0].length; c++) {
                if(this.matrixDFS(grid, r, c, visited) === true) {
                    count += 1;
                }
            }
        }
        return count;
    }

    matrixDFS(grid, r, c, visited) {
        // Base Case 1: Out of bounds
        const rowInBounds = 0 <= r && r < grid.length;
        const colInBounds = 0 <= c && c < grid[0].length;
        if(!rowInBounds || !colInBounds) {
            return false;
        }

        // Base Case 2: Water
        if(grid[r][c] === '0') {
            return false;
        }

        // Base Case 3: Visited
        const position = r + ',' + c;
        if(visited.has(position)) {
            return false;
        } else {
            visited.add(position);
        }

        // Explore Up, Down, Left, and Right
        this.matrixDFS(grid, r - 1, c, visited);
        this.matrixDFS(grid, r + 1, c, visited);
        this.matrixDFS(grid, r, c - 1, visited);
        this.matrixDFS(grid, r, c + 1, visited);

        return true;
    }
}
