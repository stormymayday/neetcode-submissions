class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        // 1. Creating and Adjacency List
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const edge of edges) {
            const [src, dst] = edge;
            adjList.get(src).add(dst);
        }

        // 2. Creating 'number of parents' hash map
        const numParents = new Map();
        for(const node of adjList.keys()) {
            numParents.set(node, 0);
        }
        // Tricky: filling in the number of parents
        for(const node of adjList.keys()) {
            for(const child of adjList.get(node)) {
                numParents.set(child, numParents.get(child) + 1);
            }
        }

        // 3. Ready List
        const ready = [];
        for(const node of numParents.keys()) {
            if(numParents.get(node) === 0) {
                ready.push(node);
            }
        }

        // 4. Getting the Topological Order
        const topologicalOrder = [];
        while(ready.length > 0) {
            const current = ready.pop();
            topologicalOrder.push(current);
            // Tricky: decrement the parent count for the children
            for(const child of adjList.get(current)) {
                numParents.set(child, numParents.get(child) - 1);
                if(numParents.get(child) === 0) {
                    ready.push(child);
                }
            }
        }

        // 5. Check lengths to detect cycle
        if(topologicalOrder.length !== adjList.size) {
            return [];
        } else {
            return topologicalOrder;
        }
    }
}
