class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adjList = this.buildAdjList(n, edges);
        return this.kahns(adjList);
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

    kahns(adjList) {

        const inDegreeMap = new Map();
        for(const node of adjList.keys()) {
            inDegreeMap.set(node, 0);
        }
        for(const node of adjList.keys()) {
            for(const neighbor of adjList.get(node)) {
                inDegreeMap.set(neighbor, inDegreeMap.get(neighbor) + 1);
            }
        }

        const ready = [];
        for(const [node, inDegreeCount] of inDegreeMap) {
            if(inDegreeCount === 0) {
                ready.push(node);
            }
        }

        const topOrder = [];
        while(ready.length > 0) {

            const currNode = ready.pop();
            topOrder.push(currNode);

            for(const neighbor of adjList.get(currNode)) {
                inDegreeMap.set(neighbor, inDegreeMap.get(neighbor) - 1);
                if(inDegreeMap.get(neighbor) === 0) {
                    ready.push(neighbor);
                }
            }
        }

        if(topOrder.length === adjList.size) {
            return topOrder;
        } else {
            return [];
        }

    }
}
