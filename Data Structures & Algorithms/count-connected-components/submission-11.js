class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = this.buildGraph(n, edges);
        let count = 0;
        const visited = new Set();
        for(const node of graph.keys()) {
            // if(this.dfs(graph, node, visited) === true) {
            //     count += 1;
            // }
            if(!visited.has(node)) {
                this.bfs(graph, node, visited);
                count += 1;
            }
        }
        return count;
    }

    bfs(graph, node, visited) {
        const queue = [node];
        visited.add(node);
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

    dfs(graph, node, visited) {
        if(visited.has(node)) {
            return false;
        }

        visited.add(node);

        for(const neighbor of graph.get(node)) {
            this.dfs(graph, neighbor, visited);
        }

        return true;
    }

    buildGraph(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, []);
        }
        for(const edge of edges) {
            const [a, b] = edge;
            adjList.get(a).push(b);
            adjList.get(b).push(a);
        }
        return adjList;
    }
}
