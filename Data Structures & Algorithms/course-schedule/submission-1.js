class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = this.buildAdjList(numCourses, prerequisites);

        const visiting = new Set();
        const visited = new Set();

        for(const node of adjList.keys()) {
            if(this.cycleDetect(adjList, node, visiting, visited) === true) {
                return false;
            }
        }

        return true;
    }

    cycleDetect(adjList, src, visiting, visited) {
        if(visited.has(src)) {
            return false;
        }

        if(visiting.has(src)) {
            return true;
        }

        visiting.add(src);

        for(const neighbor of adjList.get(src)) {
            if(this.cycleDetect(adjList, neighbor, visiting, visited) === true) {
                return true;
            }
        }

        visiting.delete(src);
        visited.add(src);

        return false;
    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const edge of edges) {
            const [src, dst] = edge;
            adjList.get(dst).add(src);
        }
        return adjList;
    }
}
