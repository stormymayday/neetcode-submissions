class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {

        // 1. Initialize a priority queue with starting position of row = 0, col = 0, and diff = 0
        const minPQ = new CustomMinPriorityQueue(); // val: [row, col], prio: max absolute difference
        minPQ.push([0, 0], 0);

        // 2. Visited set
        const visited = new Set();
        // Remove the initial visited.add("0,0") - let it be processed normally

        while(minPQ.length > 0) {

            const { val: [row, col], prio: maxAbsDiff } = minPQ.pop();

            // Check if already visited
            const currentPosition = `${row},${col}`;
            if(visited.has(currentPosition)) {
                continue; // Skip if already processed
            }
            
            // Mark as visited only when processing
            visited.add(currentPosition);

            if(row === heights.length - 1 && col === heights[0].length - 1) {
                return maxAbsDiff;
            }

            const deltas = [
                [-1, 0], // up
                [0, 1], // right
                [1, 0], // down
                [0, -1] // left
            ];
            for(const delta of deltas) {
                const [rowDelta, colDelta] = delta;
                const neighborRow = row + rowDelta;
                const neighborCol = col + colDelta;
                const neighborPosition = `${neighborRow},${neighborCol}`;
                if(
                    // Out of bounds check
                    0 <= neighborRow && neighborRow < heights.length &&
                    0 <= neighborCol && neighborCol < heights[0].length &&
                    // Visited check (but don't add to visited yet)
                    !visited.has(neighborPosition)
                ) {
                    // Don't add to visited here - let it be added when processed
                    // Calculate absolute difference between current node and neighbor
                    const currAbsDiff = Math.abs(heights[row][col] - heights[neighborRow][neighborCol]);
                    // Take the maximum
                    const newMaxAbsDiff = Math.max(maxAbsDiff, currAbsDiff);
                    minPQ.push([neighborRow, neighborCol], newMaxAbsDiff);
                }
            }

        }

        return 0; // Should never reach here for valid input
    }
}

class PriorityQueueNode {
    constructor(val, prio) {
        this.val = val;
        this.prio = prio;
    }
}

class CustomMinPriorityQueue {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    push(val, prio) {
        const newNode = new PriorityQueueNode(val, prio);
        this.data.push(newNode);
        this.length += 1;
        let currIdx = this.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);
        while(currIdx > 0 && this.data[currIdx].prio < this.data[parentIdx].prio) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
    }
    pop() {
        if(this.length === 0) {
            return null;
        }
        if(this.length === 1) {
            this.length = 0;
            return this.data.pop();
        }
        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.length -= 1;
        this.siftDown(0);
        return root;
    }
    siftDown(idx) {
        let currIdx = idx;
        while(currIdx < this.length - 1) {
            const leftChildIdx = currIdx * 2 + 1;
            const rightChildIdx = currIdx * 2 + 2;
            const leftChildPrio = this.data[leftChildIdx] === undefined ? Infinity : this.data[leftChildIdx].prio;
            const rightChildPrio = this.data[rightChildIdx] === undefined ? Infinity : this.data[rightChildIdx].prio;
            const smallerChildIdx = leftChildPrio < rightChildPrio ? leftChildIdx : rightChildIdx;
            const smallerChildPrio = leftChildPrio < rightChildPrio ? leftChildPrio : rightChildPrio;
            if(this.data[currIdx].prio > smallerChildPrio) {
                this.swap(currIdx, smallerChildIdx);
                currIdx = smallerChildIdx;
            } else {
                break;
            }
        }
    }
    heapify(vals) {
        this.data = [...vals];
        this.length = vals.length;
        let currIdx = Math.floor((this.length - 2) / 2);
        while(currIdx >= 0) {
            this.siftDown(currIdx);
            currIdx -= 1;
        }
    }
    top() {
        return this.length > 0 ? this.data[0].prio : null;
    }
    swap(idx1, idx2) {
        const temp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = temp;
    }
}
