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

        // Build a weighted adjacency list
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, []);
        }
        for(const [src, dst, cost] of edges) {
            adjList.get(src).push([dst, cost]);
        }

        // Initalize a priority queue
        const minPQ = []; // [cost, node]
        minPQ.push([0, src]);

        // Initialze distances hash map
        const distances = {};

        // Dijkstra's
        while(minPQ.length > 0) {

            minPQ.sort((a, b) => a[0] - b[0]);

            const [currCost, currNode] = minPQ.shift();

            if(distances[currNode] !== undefined) {
                continue;
            }
            distances[currNode] = currCost;

            for(const [neighbor, neighborCost] of adjList.get(currNode)) {
                if(distances[neighbor] === undefined) {
                    minPQ.push([currCost + neighborCost, neighbor]);
                }
            }
        }

        for(let i = 0; i < n; i += 1) {
            if(distances[i] === undefined) {
                distances[i] = -1;
            }
        }

        return distances;

    }
}
