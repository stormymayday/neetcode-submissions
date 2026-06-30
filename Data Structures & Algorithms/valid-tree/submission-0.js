class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adjList = this.buildAdjList(n, edges);
        const visited = new Set();
        const result = this.dfs(adjList, adjList.keys().next().value, visited, null);
        return result && visited.size === n;
    }

    dfs(adjList, src, visited, previousNode) {

        if(visited.has(src)) {
            return false;
        }

        visited.add(src);

        for(const neighbor of adjList.get(src)) {
            if(neighbor !== previousNode) {
                if(this.dfs(adjList, neighbor, visited, src) === false) {
                    return false;
                }
            }
        }

        return true;
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
