/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        // 1. weighed adjList
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, []);
        }
        for(const [src, dst, weight] of edges) {
            adjList.get(src).push([dst, weight]);
        }

        // 2. hash maps for distances AND parents
        const distances = {};
        const parents = {}; // Track parent of each node for path reconstruction
        parents[src] = null; // Source has no parent

        // 3. Priority Queue & queue up src
        const minPQ = new CustomMinPriorityQueue();
        minPQ.push(src, 0);

        while(minPQ.length > 0) {
            const { val: currNode, prio: currWeight } = minPQ.pop();

            if(distances[currNode] !== undefined) {
                continue;
            }

            distances[currNode] = currWeight;

            for(const [neighborNode, neighborWeight] of adjList.get(currNode)) {
                if(distances[neighborNode] === undefined) {
                    minPQ.push(neighborNode, currWeight + neighborWeight);

                    // Track parent for path reconstruction
                    // Only update parent if we haven't set it yet or found a better path
                    if(parents[neighborNode] === undefined) {
                        parents[neighborNode] = currNode;
                    }
                }
            }
        }

        // Handle unreachable nodes
        for(let i = 0; i < n; i += 1) {
            if(distances[i] === undefined) {
                distances[i] = -1;
            }
        }

        return distances;

    }

}

function getPath(parents, src, target) {
        // If target is unreachable
        if(parents[target] === null && target !== src) {
            return [];
        }

        const path = [];
        let current = target;
        
        // Backtrack from target to source using parents
        while(current !== null) {
            path.push(current);
            current = parents[current];
        }
        
        // Reverse to get path from source to target
        return path.reverse();
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
