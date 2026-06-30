class Graph {
    constructor() {
        this.adjList = {};
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if(!(src in this.adjList)) {
            this.adjList[src] = new Set();
        }

        if(!(dst in this.adjList)) {
            this.adjList[dst] = new Set();
        }

        if(!this.adjList[src].has(dst)) {
            this.adjList[src].add(dst);
        }
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if(!(src in this.adjList) || !(dst in this.adjList)) {
            return false;
        } else {
            if(!this.adjList[src].has(dst)) {
                return false;
            } else {
                this.adjList[src].delete(dst);
                return true;
            }
        }
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        return this.dfs(this.adjList, src, dst, new Set());
    }

    dfs(adjList, src, dst, visited) {

        // Optional?
        visited.add(src);

        const queue = [src];

        while(queue.length > 0) {

            const current = queue.shift();

            if(current === dst) {
                return true;
            }

            for(const neighbor of adjList[current]) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }

        }

        return false;
    }

    rDFS() {

    }

    bfs() {

    }
}
