class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjList = this.buildAdjList(numCourses, prerequisites);
        let result = [];
        for(const query of queries) {
            const [src, dst] = query;
            result.push(this.dfs(adjList, src, dst, new Set()));
        }
        return result;
    }

    dfs(adjList, src, dst, visited) {
        if(visited.has(src)) {
            return false;
        }

        if(src === dst) {
            return true;
        }

        visited.add(src);

        for(const neighbor of adjList.get(src)) {
            if(this.dfs(adjList, neighbor, dst, visited) === true) {
                return true;
            }
        }

        return false;
    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const edge of edges) {
            const [src, dst] = edge;
            adjList.get(src).add(dst);
        }
        return adjList;
    }

}
