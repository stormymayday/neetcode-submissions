class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adjList = this.buildAdjList(tickets);
        const result = ["JFK"];
        function dfsHelper(src) {
            // Base Case
            if(result.length === tickets.length + 1) {
                return true;
            }

            const neighbors = adjList.get(src);
            for(let i = 0; i < neighbors.length; i += 1) {
                const neighbor = neighbors[i];
                result.push(neighbor);
                adjList.get(src).splice(i, 1);
                if(dfsHelper(neighbor) === true) {
                    return true;
                }
                result.pop();
                adjList.get(src).splice(i, 0, neighbor);
            }

            return false;
        }
        dfsHelper('JFK');
        return result;
    }

    buildAdjList(edges) {
        const adjList = new Map();
        for(const edge of edges) {
            const [src, dst] = edge;
            if(!adjList.has(src)) {
                adjList.set(src, []);
            }
            if(!adjList.has(dst)) {
                adjList.set(dst, []);
            }
            adjList.get(src).push(dst);
        }
        for(const [node, neighbors] of adjList.entries()) {
            neighbors.sort();
        }
        return adjList;
    }
}
