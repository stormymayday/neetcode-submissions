class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        // 1. Create and adjacency list
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const [src, dst] of edges) {
            adjList.get(src).add(dst);
        }

        // 2. Post Order DFS with White Gray black
        const topOrder = [];
        const visiting = new Set();
        const visited = new Set();
        function dfs(node) {

            if(visited.has(node)) {
                return true; // no cycle
            }

            if(visiting.has(node)) {
                return false; // cycle!
            }

            visiting.add(node);

            for(const neighbor of adjList.get(node)) {
                if(dfs(neighbor) === false) {
                    return false; // cycle!
                }
            }

            visiting.delete(node);
            visited.add(node);
            topOrder.push(node);

        }

        // 3. Run DFS on every node
        for(let i = 0; i < n; i += 1) {
            if(!visited.has(i)) {
                if(dfs(i) === false) {
                    return []; // cycle!
                }
            }
        }
        return topOrder.reverse();
    }
}
