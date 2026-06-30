class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        return this.matrixBFS(grid, 0, 0, new Set());
    }

    matrixBFS(grid, r, c, visited) {

        const queue = [[r, c, 0]];

        visited.add(`${r},${c}`);

        while(queue.length > 0) {

            const [ row, col, distance] = queue.shift();

            if(row === grid.length - 1 && col == grid[0].length - 1) {
                return distance;
            }

            const deltas = [
                [-1, 0], // up
                [1, 0], // down
                [0, -1], // left
                [0, 1] // right
            ];

            for(const delta of deltas) {
                const [rowDelta, colDelta] = delta;
                const neighborRow = row + rowDelta;
                const neighborCol = col + colDelta;
                const neighborPosition = `${neighborRow},${neighborCol}`;
                const rowInBounds = 0 <= neighborRow && neighborRow < grid.length;
                const colInBounds = 0 <= neighborCol && neighborCol < grid[0].length;
                if(
                    rowInBounds === true && colInBounds === true
                    && !visited.has(neighborPosition)
                    && grid[neighborRow][neighborCol] !== 1
                ) {
                    visited.add(neighborPosition);
                    queue.push([
                        neighborRow,
                        neighborCol,
                        distance + 1
                    ]);
                }
            }

        }

        return -1;

    }
}
