class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {

        const visited = new Set(deadends);

        // Edge Case
        if(visited.has("0000")) {
            return -1;
        }

        const queue = [];
        queue.push(["0000", 0]); // starting point with distance 0
        visited.add("0000");

        // BFS
        while(queue.length > 0) {
            const [currNode, currDist] = queue.shift();
            if(currNode === target) {
                return currDist;
            }
            for(const neighbor of this.getNeighbors(currNode)) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, currDist + 1]);
                }
            }
        }
        // Edge Case: can't reach target
        return -1;
    }

    getNeighbors(node) {
        const neighbors = [];

        // const arr = node.split("");

        for(let i = 0; i < node.length; i += 1) {
            // 1. Create two (string array) copies of node (string) 
            const copy1 = [...node.split("")];
            const copy2 = [...node.split("")];

            // 2. Extract current char
            const currChar = node[i];
            // 3. Convert it into a number
            const digit = Number(currChar);

            // 4. Increment by 1 (circle back to 0 if goes over 10) 
            const plusOne = (digit + 1) % 10;
            // 5. Overwrite value at current index in 'copy1' with 'plusOne' converted into a string
            copy1[i] = String(plusOne);

            // 6. Decrement by 1 (circle back to 9 if goes below 9)
            const minusOne = digit === 0 ? 9 : digit - 1;
            // 7. Overwrite value at current index in 'copy2' with 'minusOne' converted into a string
            copy2[i] = String(minusOne);

            // 8. Convert 'copy1' and 'copy2' into strings and push to 'neighbors'
            neighbors.push(copy1.join(""));
            neighbors.push(copy2.join(""));
        }
        return neighbors;
    }
}
