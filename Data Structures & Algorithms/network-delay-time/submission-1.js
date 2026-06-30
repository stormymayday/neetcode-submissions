class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {

        // 1. Create a weighted adjacency list
        const adjList = this.buildAdjList(n, times);

        // 2. Initialize a priority queue with src node
        const minPQ = new CustomMinPriorityQueue();
        minPQ.push(k, 0);

        // 3. Visited hash table
        const visited = {};
        let maxCost = -Infinity; // minimum time it takes for all of the n nodes to receive the signal.

        // 4. Dijkstra's
        while(minPQ.length > 0) {
            const { val: currNode, prio: currCost } = minPQ.pop();

            if(visited[currNode] !== undefined) {
                continue;
            }

            visited[currNode] = currCost;
            maxCost = Math.max(maxCost, currCost);

            for(const [neighborNode, neighborCost] of adjList.get(currNode)) {
                if(visited[neighborNode] === undefined) {
                    minPQ.push(neighborNode, currCost + neighborCost);
                }
            }
        }

        return Object.keys(visited).length === n ? maxCost : -1;

    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 1; i <= n; i += 1) {
            adjList.set(i, []);
        }
        for(const [src, dst, cost] of edges) {
            adjList.get(src).push([dst, cost]);
        }
        return adjList;
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