class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adjList = this.buildAdjList(numCourses, prerequisites);
        return this.kahns(adjList);
    }

    kahns(adjList,) {
        // 1. create 'numParents' hash map
        const numParents = new Map();
        for(const node of adjList.keys()) {
            numParents.set(node, 0);
        }
        for(const node of adjList.keys()) {
            for(const child of adjList.get(node)) {
                numParents.set(child, numParents.get(child) + 1);
            }
        }

        // 2. craete 'ready' list
        const ready = [];
        for(const node of numParents.keys()) {
            if(numParents.get(node) === 0) {
                ready.push(node);
            }
        }

        // 3. Topological Order
        const topOrder = [];
        while(ready.length > 0) {
            const current = ready.pop();
            topOrder.push(current);
            // iterating over children of current
            for(const child of adjList.get(current)) {
                // decrement parent count
                numParents.set(child, numParents.get(child) - 1);
                // move 'child' to 'ready' if parent count reaches 0
                if(numParents.get(child) === 0) {
                    ready.push(child);
                }
            }
        }

        // 4. Check for cycles
        if(topOrder.length !== adjList.size) {
            return []
        } else {
            return topOrder.reverse();
        }

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
