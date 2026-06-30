class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {

        const ROWS = grid.length;
        const COLS = grid[0].length;

        const queue = [];
        const visited = new Set();

        for(let row = 0; row < ROWS; row += 1) {
            for(let col = 0; col < COLS; col += 1) {
                if(grid[row][col] === 0) {
                    queue.push([row, col, 0]);
                    visited.add(`${row},${col}`);
                }
            }
        }

        while(queue.length > 0) {
            const [row, col, distance] = queue.shift();
            const directions = [
                [-1, 0], // up
                [0, 1], // right
                [1, 0], // down
                [0, -1], // left
            ];
            for(const [rowDelta, colDelta] of directions) {
                const neighborRow = row + rowDelta;
                const neighborCol = col + colDelta;
                const neighborPosition = `${neighborRow},${neighborCol}`;
                if(
                    // out of bounds check
                    0 <= neighborRow && neighborRow < ROWS &&
                    0 <= neighborCol && neighborCol < COLS &&
                    // visited check
                    !visited.has(neighborPosition) &&
                    // wall check
                    grid[neighborRow][neighborCol] !== -1
                ) {
                    visited.add(neighborPosition);
                    grid[neighborRow][neighborCol] = distance + 1;
                    queue.push([neighborRow, neighborCol, distance + 1]);
                }
            }
        }

    }
}
