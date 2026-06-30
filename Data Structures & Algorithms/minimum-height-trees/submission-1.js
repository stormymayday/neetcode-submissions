class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        // Edge Case:
        if(n === 1 || n < 2) {
            return [0];
        }
        const adjList = this.buildAdjList(n, edges);
        return this.bfs(adjList);
    }

    bfs(adjList) {
        // Count number of edges for each node
        const edgeCount = new Map();
        for(const [node, edges] of adjList.entries()) {
            edgeCount.set(node, edges.size);
        }
        // Get the leaves (nodes with edge count of 1)
        let leaves = [];
        for(const [node, count] of edgeCount.entries()) {
            if(count === 1) {
                leaves.push(node);
            }
        }
        // Trim the leaves until reaching the centroids
        let nodesRemaining = adjList.size;
        while(nodesRemaining > 2) {
            // Figure this out
            nodesRemaining -= leaves.length;
            // Figure this out
            const newLeaves = [];
            while(leaves.length > 0) {
                const current = leaves.shift();
                for(const neighbor of adjList.get(current)) {
                    edgeCount.set(neighbor, edgeCount.get(neighbor) - 1);
                    if(edgeCount.get(neighbor) === 1) {
                        // Figure this out
                        newLeaves.push(neighbor);
                    }
                }
            }
            // Figure this out
            leaves = newLeaves;
        }
        return leaves;
    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const edge of edges) {
            const [src, dst] = edge;
            adjList.get(src).add(dst);
            adjList.get(dst).add(src);
        }
        return adjList;
    }
}
