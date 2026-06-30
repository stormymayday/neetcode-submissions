class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        // 1. Create an adjacency list and inDegree Map
        const adjList = new Map();
        const inDegreeMap = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
            inDegreeMap.set(i, 0);
        }
        for(const [src, dst] of edges) {
            adjList.get(src).add(dst);
        }
        for(let i = 0; i < n; i += 1) {
            for(const neighbor of adjList.get(i)) {
                inDegreeMap.set(neighbor, inDegreeMap.get(neighbor) + 1);
            }
        }

        // 2. Set up a ready queue / stack
        const queue = [];
        for(const [node, inDegreeCount] of inDegreeMap.entries()) {
            if(inDegreeCount === 0) {
                queue.push(node);
            }
        }

        // 3. Kahn's algorithm (BFS)
        const topOrder = [];
        while(queue.length > 0) {

            const currNode = queue.shift();
            topOrder.push(currNode);

            for(const neighbor of adjList.get(currNode)) {
                inDegreeMap.set(neighbor, inDegreeMap.get(neighbor) - 1);
                if(inDegreeMap.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // 4. Cycle check
        if(topOrder.length === n) {
            return topOrder;
        } else {
            return [];
        }

    }
}
