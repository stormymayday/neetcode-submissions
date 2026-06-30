class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = this.buildGraph(n, edges);
        const visited = new Set();
        let count = 0;
        for(const node of graph.keys()) {
            if(this.dfs(graph, node, visited) === true) {
                count += 1;
            }
        }
        return count;
    }

    buildGraph(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i++) {
            adjList.set(i, []);
        }
        for(const edge of edges) {
            const [a, b] = edge;
            adjList.get(a).push(b);
            adjList.get(b).push(a);
        }
        return adjList;
    }

    dfs(graph, src, visited) {
        if(visited.has(src)) {
            return false;
        } else {
            visited.add(src);
        }

        for(const neighbor of graph.get(src)) {
            this.dfs(graph, neighbor, visited);
        }
        return true;
    }
}
