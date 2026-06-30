class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        this.matrixBFS(sr, sc, image, color);
        return image;
    }

    matrixBFS(row, col, grid, color) {

        const ROWS = grid.length;
        const COLS = grid[0].length;

        let queue = [];
        queue.push([row, col, ]);
        const visited = new Array(ROWS);
        for(let i = 0; i < ROWS; i += 1) {
            visited[i] = new Array(COLS).fill(false);
        }
        visited[row][col] = true;

        while(queue.length > 0) {

            let newQueue = [];
            for(let i = 0; i < queue.length; i += 1) {

                const [row, col] = queue[i];
                const temp = grid[row][col];
                grid[row][col] = color;

                const directions = [
                    [-1, 0], // up
                    [0, 1], // right
                    [1, 0], // down
                    [0, -1], // left
                ];
                for(const [rowDelta, colDelta] of directions) {
                    const neighborRow = row + rowDelta;
                    const neighborCol = col + colDelta;
                    if(
                        // out of bounds check
                        0 <= neighborRow && neighborRow < ROWS &&
                        0 <= neighborCol && neighborCol < COLS &&
                        // visited check
                        visited[neighborRow][neighborCol] === false &&
                        // value check
                        grid[neighborRow][neighborCol] === temp
                    ) {
                        visited[neighborRow][neighborCol] = true;
                        newQueue.push([neighborRow, neighborCol]);
                    }
                }
            }
            if(newQueue.length > 0) {
                    queue = newQueue;
                } else {
                    break;
                }

        }

    }
}
