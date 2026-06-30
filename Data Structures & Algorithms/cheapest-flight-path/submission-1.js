class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        // 1. Create adjacency list where adj[X] contains neighbors and prices
        const adjList = new Map();
        for(let i = 0; i < n; i += 1) {
            adjList.set(i, []);
        }
        for (const [src, dst, cost] of flights) {
            adjList.get(src).push([dst, cost]);
        }
        
        // 2. Initialize dist array with large values (minimum price to reach each node)
        const dist = new Array(n).fill(Infinity);
        
        // 3. Initialize queue with {node, distance} pairs, starting with {src, 0}
        const queue = [[src, 0]];
        
        // 4. Create stops variable and set to 0
        let stops = 0;
        
        // 5. Perform BFS until queue is empty or stops > k
        while (queue.length > 0 && stops <= k) {
            const size = queue.length;
            
            // Iterate over all nodes at current level
            for (let i = 0; i < size; i++) {
                const [currNode, currCost] = queue.shift();
                
                // Iterate over all neighbors of current node
                for (const [neighbor, neighborCost] of adjList.get(currNode)) {
                    const newCost = currCost + neighborCost;
                    
                    // If we found a cheaper path to neighbor, update and add to queue
                    if (newCost < dist[neighbor]) {
                        dist[neighbor] = newCost;
                        queue.push([neighbor, newCost]);
                    }
                }
            }
            
            // After processing all nodes at current level, increment stops
            stops++;
        }
        
        // 6. Return result: dist[dst] if reachable, otherwise -1
        return dist[dst] === Infinity ? -1 : dist[dst];
    }
}