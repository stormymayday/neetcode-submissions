class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = this.buildGraph(n, edges);
        let componentCount = 0;
        const visited = new Set();
        for(const node of graph.keys()) {
            if(!visited.has(node)) {
                this.bfs(graph, node, visited);
                componentCount += 1;
            }
        }
        return componentCount;
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

    bfs(graph, src, visited) {
        const queue = [src];
        visited.add(src);
        while(queue.length > 0) {
            const current = queue.shift();
            for(const neighbor of graph.get(current)) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}
