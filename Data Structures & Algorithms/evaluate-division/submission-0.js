class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        const adjList = this.buildAdjList(equations, values);
        const result = [];
        for(const query of queries) {
            const [x, y] = query;
            result.push(
                this.dfs(adjList, x, y, new Set())
            );
        }
        return result;
    }

    dfs(adjList, x, y, visited) {
        if(!adjList.has(x) || !adjList.has(y)) {
            return -1;
        }
        if(x === y) {
            return 1;
        }
        visited.add(x);
        for(const [neighbor, weight] of adjList.get(x)) {
            if(!visited.has(neighbor)) {
                const result = this.dfs(adjList, neighbor, y, visited);
                if(result !== -1) {
                    return weight * result;
                }
            }
        }
        return -1;
    }

    buildAdjList(equations, values) {
        const adjList = new Map();
        for(let i = 0; i < equations.length; i += 1) {
            const [x, y] = equations[i];
            const value = values[i];
            if(!adjList.has(x)) {
                adjList.set(x, new Set());
            }
            if(!adjList.has(y)) {
                adjList.set(y, new Set());
            }
            adjList.get(x).add([y, value]);
            adjList.get(y).add([x, 1/value]);
        }
        return adjList;
    }
}
