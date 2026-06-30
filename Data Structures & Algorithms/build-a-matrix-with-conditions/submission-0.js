class Solution {
    /**
     * @param {number} k
     * @param {number[][]} rowConditions
     * @param {number[][]} colConditions
     * @return {number[][]}
     */
    buildMatrix(k, rowConditions, colConditions) {
        // 1. Adjacency Lists
        const rowAdjList = this.buildAdjList(k, rowConditions);
        const colAdjList = this.buildAdjList(k, colConditions);

        // 2. Topological Ordering
        const rowOrder = this.kahns(rowAdjList);
        const colOrder = this.kahns(colAdjList);

        // 3. Cycle Check
        if(rowOrder.length === 0 || colOrder.length === 0) {
            return [];
        }

        // 4. Hash maps for faster lookup
        const valToRow = new Map();
        for(let i = 0; i < rowOrder.length; i += 1) {
            valToRow.set(rowOrder[i], i);
        }
        const valToCol = new Map();
        for(let i = 0; i < colOrder.length; i += 1) {
            valToCol.set(colOrder[i], i);
        }

        // 5. Creating the 'result' matrix
        const res = new Array(k);
        for(let i = 0; i < k; i += 1) {
            res[i] = new Array(k).fill(0);
        }
        for(let i = 1; i <= k; i += 1) {
            const row = valToRow.get(i);
            const col = valToCol.get(i);
            res[row][col] = i;
        }
        return res;
    }

    kahns(adjList) {
        // 1. Build inDegree map
        const inDegree = new Map();
        for(const node of adjList.keys()) {
            inDegree.set(node, 0);
        }
        for(const node of adjList.keys()) {
            for(const neighbor of adjList.get(node)) {
                inDegree.set(neighbor, inDegree.get(neighbor) + 1);
            }
        }

        // 2. 'ready' queue / stack for nodes with in-degree of zero
        const ready = [];
        for(const [node, inDegreeCount] of inDegree.entries()) {
            if(inDegreeCount === 0) {
                ready.push(node);
            }
        }

        // 3. Kahn's BFS
        const topOrder = [];
        while(ready.length > 0) {
            const currNode = ready.pop();
            topOrder.push(currNode);
            for(const neighbor of adjList.get(currNode)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if(inDegree.get(neighbor) === 0) {
                    ready.push(neighbor);
                }
            }
        }

        // 4. Cycle check & return
        if(topOrder.length === adjList.size) {
            return topOrder;
        } else {
            return [];
        }
    }

    buildAdjList(n, edges) {
        const adjList = new Map();
        for(let i = 1; i <= n; i += 1) {
            adjList.set(i, new Set());
        }
        for(const [src, dst] of edges) {
            adjList.get(src).add(dst);
        }
        return adjList;
    }
}
