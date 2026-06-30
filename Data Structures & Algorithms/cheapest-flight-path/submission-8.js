class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {

        // 1. Create a weighted adjacency list from the edge list (flights)
        const adjList = new Map(); // src -> [[dst, cost], ...]
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, []);
        }
        for(const [a, b, cost] of flights) {
            adjList.get(a).push([b, cost]);
        }

        // 2. Initalize a priority queue with src node
        const minPQ = new CustomMinPriorityQueue(); // val: [node, edgesUsed] , prio: cost
        minPQ.push([src, 0], 0);

        // 3. Initalize visited hash map
        const visited = new Map(); // node -> edgesUsed

        // 4. Perform modified Dijkstra's
        while(minPQ.length > 0) {
            const { val: [currNode, currEdgesUsed], prio: currCost } = minPQ.pop();

            // If we reach the destination first it's guaranteed to have lowest cost
            if(currNode === dst) {
                return currCost;
            }

            // If node has been visited AND it took less edges, skip current
            if(visited.has(currNode) && visited.get(currNode) <= currEdgesUsed) {
                continue;
            }

            // We can at most use k + 1 edges
            if(currEdgesUsed > k) {
                continue;
            }

            // Mark node as visited and how many edges it took so far
            visited.set(currNode, currEdgesUsed);

            // Visit neighbors
            for(const [neighbor, neighborCost] of adjList.get(currNode)) {
                if(!visited.has(neighbor)) {
                    minPQ.push([neighbor, currEdgesUsed + 1], currCost + neighborCost);
                }
            }

        }

        // 4. not possible
        return -1;
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
