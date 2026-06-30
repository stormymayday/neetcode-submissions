class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        const graph = this.buildGraph(edges, n);
        const countObj = {
            count: 0
        }
        const visited = new Set();

        for(const [vertex, neighbors] of graph) {
            
            if(!visited.has(vertex)) {
                this.dfs(graph, vertex, visited, countObj);
            }

        }
        return countObj.count;
    }

    dfs(graph, src, visited, countObj) {
        const stack = [src];
        visited.add(src);
        while(stack.length > 0) {
            const current = stack.pop();
            for(const neighbor of graph.get(current) ?? []) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            } 
        }
        countObj.count++;
    }

    buildGraph(edges, n) {
        // const adjList = new Map();
        // for(const edge of edges) {
        //     const [a, b] = edge;

        //     if(!adjList.has(a)) {
        //         adjList.set(a, []);
        //     }
        //     adjList.get(a).push(b);

        //     if(!adjList.has(b)) {
        //         adjList.set(b, []);
        //     }
        //     adjList.get(b).push(a);
        // }
        // return adjList;
        
        const adjList = new Map();
        // all nodes from 0 to n - 1
        for (let i = 0; i < n; i++) {
        adjList.set(i, []);
        }

        for (const [a, b] of edges) {
        adjList.get(a).push(b);
        adjList.get(b).push(a);
        }

        return adjList;
    }
}
