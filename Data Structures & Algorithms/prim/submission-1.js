/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} edges
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {

        // 1. Construct weighted Adjacency List
        const adjList = this.buildAdjList(n, edges);

        // Choose starting node and push all it's neighbors into a PQ
        const minPQ = new CustomMinPriorityQueue();
        for(const neighbor of adjList.get(0)) {
            const [node, weight] = neighbor;
            minPQ.push([0, node], weight);
        }

        const visited = new Set();
        visited.add(0);

        // Variables
        let edgeCount = 0;
        const mst = [];
        let mstCost = 0;

        while(minPQ.length > 0 && edgeCount < n - 1) {
            const {val, prio: weight} = minPQ.pop();

            const [src, dst] = val;

            if(visited.has(dst)) {
                continue;
            }

            visited.add(dst);
            mst.push([src, dst]);
            mstCost += weight;
            edgeCount += 1;

            for(const neighbor of adjList.get(dst)) {
                const [node, weight] = neighbor;
                if(!visited.has(node)) {
                    minPQ.push([dst, node], weight);
                }
            }
        }

        if(edgeCount === n - 1) {
            return mstCost;
        } else {
            return -1;
        }
    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, []);
        }
        for(const edge of edges) {
            const [src, dst, weight] = edge;
            adjList.get(src).push([dst, weight]);
            adjList.get(dst).push([src, weight]);
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
