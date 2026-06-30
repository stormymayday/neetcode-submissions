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
        for(const [src, dst] of edges) {
            adjList.get(src).add(dst);
        }

        const topSort = [];
        const visiting = new Set();
        const visited = new Set();

        // 2. Define DFS with white gray black
        function dfs(adjList, src, visiting, visited, topSort) {

            if(visited.has(src)) {
                return true; // no cycle so far
            }

            if(visiting.has(src)) {
                return false; // cycle!
            }

            visiting.add(src);

            for(const neighbor of adjList.get(src)) {
                if(dfs(adjList, neighbor, visiting, visited, topSort) === false) {
                    // A cycle is detected
                    return false;
                }
            }

            visiting.delete(src);
            visited.add(src);
            topSort.push(src);
            
            // No cycle detected
            return true;
        }

        // 3. Run DFS on every node
        for(const node of adjList.keys()) {
            if(!visited.has(node)) {
                if(dfs(adjList, node, visiting, visited, topSort) === false) {
                    // Return an empty list if a cycle is detected
                    return [];
                }
            }
        }

        // Otherwise, there were no cycle
        topSort.reverse();
        return topSort;
    }
}