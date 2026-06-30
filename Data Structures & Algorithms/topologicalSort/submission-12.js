class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {

        const adjList = this.buildAdjList(n, edges);

        return this.kahnsBFS(adjList);

    }

    kahnsBFS(adjList) {

        const inDegreeMap = new Map();
        for(const node of adjList.keys()) {
            inDegreeMap.set(node, 0);
        }
        for(const node of adjList.keys()) {
            for(const neighbour of adjList.get(node)) {
                inDegreeMap.set(neighbour, inDegreeMap.get(neighbour) + 1);
            }
        }

        const ready = [];
        for(const [node, inDegreeCount] of inDegreeMap.entries()) {
            if(inDegreeCount === 0) {
                ready.push(node);
            }
        }

        const topOrder = [];
        while(ready.length > 0) {
            const currNode = ready.pop();
            topOrder.push(currNode);
            for(const neighbour of adjList.get(currNode)) {
                inDegreeMap.set(neighbour, inDegreeMap.get(neighbour) - 1);
                if(inDegreeMap.get(neighbour) === 0) {
                    ready.push(neighbour);
                }
            }
        }
        if(topOrder.length === adjList.size) {
            return topOrder;
        } else {
            return [];
        }

    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const [src, dst] of edges) {
            adjList.get(src).add(dst);
        }
        return adjList;
    }
}
