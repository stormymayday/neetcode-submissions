class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        const visited = new Set();
        return this.matrixBFS(grid, 0, 0, visited);
    }

    matrixBFS(grid, r, c, visited) {

        const queue = [{row: r, col: c, distance: 0}];
        visited.add(`${r},${c}`);

        while(queue.length > 0) {

            const {row, col, distance} = queue.shift();

            if(row === grid.length - 1 && col === grid[0].length -1) {
                return distance;
            }

            const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            for(const delta of deltas) {
                const [rowDelta, colDelta] = delta;
                const neighborRow = row + rowDelta;
                const neighborCol = col + colDelta;
                const neighborPosition = `${neighborRow},${neighborCol}`;
                if(
                    this.isInBounds(grid, neighborRow, neighborCol)
                    && grid[neighborRow][neighborCol] !== 1
                    && !visited.has(neighborPosition)
                ) {
                    visited.add(neighborPosition);
                    queue.push({
                        row: neighborRow,
                        col: neighborCol,
                        distance: distance + 1
                    });
                }
            }
        }

        return -1;

    }

    isInBounds(grid, r, c) {
        const rowInBounds = 0 <= r && r < grid.length;
        const colInBounds = 0 <= c && c < grid[0].length;
        return rowInBounds && colInBounds;
    }
}
