class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const gridCopy = new Array(ROWS);
        // const visited = new Array(ROWS);
        for(let row = 0; row < ROWS; row += 1) {
            gridCopy[row] = [...grid[row]];
            // visited[row] = new Array(COLS).fill(false);
        }

        // Phase 1: Go around the edges and dfs on '1's flipping all edge adjacent land to '2's
        for(let col = 0; col < COLS; col += 1) {
            // Top Row
            if(gridCopy[0][col] === 1) {
                this.matrixDFS(0, col, gridCopy);
            }

            // Bottom Row
            if(gridCopy[ROWS - 1][col] === 1) {
                this.matrixDFS(ROWS - 1, col, gridCopy);
            }
        }
        for(let row = 0; row < ROWS; row += 1) {
            // Leftmost Col
            if(gridCopy[row][0] === 1) {
                this.matrixDFS(row, 0, gridCopy);
            }

            // Rightmost Col
            if(gridCopy[row][COLS - 1] === 1) {
                this.matrixDFS(row, COLS - 1, gridCopy);
            }
        }

        // Phase 2: scan graph and count number of '1's
        let res = 0;
        for(let row = 0; row < ROWS; row += 1) {
            for(let col = 0; col < COLS; col += 1) {
                if(gridCopy[row][col] === 1) {
                    res += 1;
                }
            }
        }
        return res;
    }

    matrixDFS(row, col, grid) {
        // Base Case: out of bounds
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return;
        }

        // Base Case: visited
        // if(visited[row][col] === true) {
        //     return;
        // }

        // Base Case: not 1 (can be 0 - land, 2 - water adjacent land)
        if(grid[row][col] !== 1) {
            return;
        }

        grid[row][col] = 2;

        const directions = [
            [-1, 0], // up
            [0, 1], // right
            [1, 0], // down
            [0, -1], // left
        ];
        for(let [rowDelta, colDelta] of directions) {
            this.matrixDFS(row + rowDelta, col + colDelta, grid);
        }
        
    }
}
