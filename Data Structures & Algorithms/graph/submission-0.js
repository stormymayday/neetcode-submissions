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
        if(src in this.adjList) {
            if(this.adjList[src].has(dst)) {
                this.adjList[src].delete(dst);
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const visited = new Set();
        const adjListDFS = (src, dst, visited) => {
            // if(this.adjList[src].size === 0) {
            //     return false;
            // }

            if(visited.has(src)) {
                return false;
            }

            if(src === dst) {
                return true;
            }

            visited.add(src);

            for(const neighbor of this.adjList[src]) {
                if(adjListDFS(neighbor, dst, visited) === true) {
                    return true;
                }
            }

            return false;
        }
        return adjListDFS(src, dst, visited);
    }
}
