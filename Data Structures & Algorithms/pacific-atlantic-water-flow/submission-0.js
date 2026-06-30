class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        const ROWS = heights.length;
        const COLS = heights[0].length;
        
        // to track visited coordinates
        const pacificVisited = new Set();
        const atlanticVisited = new Set();
        // intersection of both is the answer

        // 1. PREFILLING THE PACIFIC QUEUE
        const pacificQueue = [];
        // Top Row
        for(let col = 0; col < heights[0].length; col += 1) {
            pacificQueue.push([0, col]);
            pacificVisited.add(`${0},${col}`);
        }
        // Left Col
        for(let row = 0; row < heights.length; row += 1) {
            pacificQueue.push([row, 0]);
            pacificVisited.add(`${row},${0}`);
        }

        // 2. Running BFS on the pacificQueue
        while(pacificQueue.length > 0) {
            const [row, col] = pacificQueue.shift();
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
                    !pacificVisited.has(neighborPosition) &&
                    // elevation check
                    heights[row][col] <= heights[neighborRow][neighborCol]
                ) {
                    pacificVisited.add(neighborPosition);
                    pacificQueue.push([neighborRow, neighborCol]);
                }
            }
        }

        // 3. PREFILLING THE ATLANTIC QUEUE
        const atlanticQueue = [];
        // Right Col
        for(let row = 0; row < heights.length; row += 1) {
            atlanticQueue.push([row, COLS - 1]);
            atlanticVisited.add(`${row},${COLS - 1}`);
        }
        // Bottom Row
        for(let col = 0; col < heights[heights.length - 1].length; col += 1) {
            atlanticQueue.push([ROWS - 1, col]);
            atlanticVisited.add(`${ROWS - 1},${col}`);
        }

         // 4. Running BFS on the atlanticQueue
        while(atlanticQueue.length > 0) {
            const [row, col] = atlanticQueue.shift();
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
                    !atlanticVisited.has(neighborPosition) &&
                    // elevation check
                    heights[row][col] <= heights[neighborRow][neighborCol]
                ) {
                    atlanticVisited.add(neighborPosition);
                    atlanticQueue.push([neighborRow, neighborCol]);
                }
            }
        }

        const res = [];
        for(const coords of pacificVisited) {
            if(atlanticVisited.has(coords)) {
                // unpack / parse the row & col and push it to the result
                const [row, col] = coords.split(",");
                res.push([parseInt(row), parseInt(col)]);
            }
        }
        return res;

    }
}
