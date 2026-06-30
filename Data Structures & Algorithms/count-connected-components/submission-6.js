class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let count = 0;
        const graph = this.buildGraph(n, edges);
        const visited = new Set();
        for(const [vertex, neighbors] of graph) {
            if(this.rDFS(graph, vertex, visited) === true) {
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

    rDFS(graph, src, visited) {
        if(visited.has(src)) {
            return false;
        } else {
            visited.add(src);
        }

        for(const neighbor of graph.get(src) ?? []) {
            this.rDFS(graph, neighbor, visited);
        }

        return true;
    }
}
