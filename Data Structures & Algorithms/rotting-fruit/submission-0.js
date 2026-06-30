class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshOranges = 0;
        let time = 0;
        const visited = new Set();
        let queue = [];
        for(let row = 0; row < grid.length; row += 1) {
            for(let col = 0; col < grid[0].length; col += 1) {
                const current = grid[row][col];
                if(current === 1) {
                    freshOranges += 1;
                }
                if(current === 2) {
                    queue.push([row, col]);
                    visited.add(`${row},${col}`);
                }
            }
        }
        while(queue.length > 0) {
            const n = queue.length;
            let nextLayer = [];
            for(let i = 0; i < n; i += 1) {
                const [row, col] = queue.shift();
                const deltas = [
                    [-1, 0], // up
                    [0, 1], // right
                    [1, 0], // down
                    [0, -1], // left
                ];
                for(const delta of deltas) {
                    const [rowDelta, colDelta] = delta;
                    const neighborRow = rowDelta + row;
                    const neighborCol = colDelta + col;
                    const neighborPosition = `${neighborRow},${neighborCol}`;
                    if(
                        0 <= neighborRow && neighborRow < grid.length &&
                        0 <= neighborCol && neighborCol < grid[0].length &&
                        !visited.has(neighborPosition) &&
                        grid[neighborRow][neighborCol] === 1
                    ) {
                        freshOranges -= 1;
                        visited.add(neighborPosition);
                        nextLayer.push([neighborRow, neighborCol]);
                    }
                }
            }
            if(nextLayer.length !== 0) {
                time += 1;
            }
            queue = nextLayer;
        }
        if(freshOranges === 0) {
            return time;
        } else {
            return -1;
        }
    }
}
