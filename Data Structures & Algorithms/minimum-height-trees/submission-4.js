class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        if(n === 1 || edges.length === 0) {
            return [0];
        }
        const adjList = this.buildAdjList(n, edges);
        return this.kahns(adjList);
    }

    kahns(adjList) {
        // 1. Queue up nodes with 1 neighbor (leaves)
        let leaves = [];
        for(const [node, neighbours] of adjList.entries()) {
            if(neighbours.size === 1) {
                leaves.push(node);
            }
        }

        // 2. process nodes layer by layer (BFS) until there are at most 2 nodes left (centroids)
        let nodesRemaining = adjList.size;
        while(nodesRemaining > 2) {
            nodesRemaining -= leaves.length;
            const nextLayerLeaves = [];
            // process every leaf on current layer
            for(const leaf of leaves) {
                // A leaf in a tree should only have 1 neighbor (parent)
                const neighbours = adjList.get(leaf); // this returns a set
                const parent = [...neighbours][0]; // extract the parent

                // delete the leaf from parent's list
                adjList.get(parent).delete(leaf);
                // if parent's neighbour count is 1, push it into nextLayerLeaves
                if(adjList.get(parent).size === 1) {
                    nextLayerLeaves.push(parent);
                }   
            }
            // update the leaves
            leaves = nextLayerLeaves;
        }
        // Trees don't have cycles. Thus, just return leaves
        return leaves;
    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const edge of edges) {
            const [a, b] = edge;
            adjList.get(a).add(b);
            adjList.get(b).add(a);
        }
        return adjList;
    }
}
