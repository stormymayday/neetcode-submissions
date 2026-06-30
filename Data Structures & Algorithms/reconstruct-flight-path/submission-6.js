class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {

        // number of edges (goal is to visit all the edges)
        const n = tickets.length;

        // Neighbors are sorted
        const adjList = this.buildAdjList(tickets);

        const res = [];
        const usedTickets = new Set();
        this.backtrackDFS("JFK", adjList, n, ["JFK"], res, usedTickets);
        return res[0];

    }

    backtrackDFS(src, adjList, n, path, res, usedTickets) {
        // understand this 'n + 1'
        // n is the number of edges
        // how path length is related to the number of edges
        if(path.length === n + 1) {
            res.push([...path]);
            return true;
        }

        for(const [neighbor, ticketIndex] of adjList.get(src)) {
            if(!usedTickets.has(ticketIndex)) {
                path.push(neighbor);
                usedTickets.add(ticketIndex);
                // this.backtrackDFS(neighbor, adjList, n, path, res, usedTickets);
                // Check if recursive call found solution
                if (this.backtrackDFS(neighbor, adjList, n, path, res, usedTickets)) {
                    return true; // Pass the "success" signal up the call stack
                }
                path.pop();
                usedTickets.delete(ticketIndex);
            }
        }

        return false; // "No solution found in this branch"

    }

    // buildAdjList(edges) {
    //     const adjList = new Map();
    //     for(const [src, dst] of edges) {

    //         if(!adjList.has(src)) {
    //             adjList.set(src, []);
    //         }

    //         if(!adjList.has(dst)) {
    //             adjList.set(dst, []);
    //         }

    //         adjList.get(src).push(dst);

    //     }
    //     for(const neighbors of adjList.values()) {
    //         neighbors.sort();
    //     }
    //     return adjList;
    // }

    buildAdjList(tickets) {
        const adjList = new Map();
        
        for (let i = 0; i < tickets.length; i++) {
            const [src, dst] = tickets[i];
            
            if (!adjList.has(src)) {
                adjList.set(src, []);
            }

            if(!adjList.has(dst)) {
                adjList.set(dst, []);
            }
            
            adjList.get(src).push([dst, i ]);
        }
        
        for (const neighbors of adjList.values()) {
            neighbors.sort((a, b) => a[0].localeCompare(b[0]));
        }
        
        return adjList;
    }
}
