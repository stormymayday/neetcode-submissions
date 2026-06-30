/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const originalToClone = new Map();
        function dfs(node) {
            // Base Case: null input
            if(node === null) {
                return node;
            }
            // Base Case: if node is in the hash map
            if(originalToClone.has(node)) {
                // return the clone
                return originalToClone.get(node);
            }
            // Create the clone
            const clone = new Node(node.val, []);
            // Add entry to the hash map (key: original, value: clone)
            originalToClone.set(node, clone);
            // Iterate over the neighbors
            for(const neighbor of node.neighbors) {
                // if(!originalToClone.has(neighbor)) {
                    clone.neighbors.push(dfs(neighbor));
                // }
            }

            return clone;

        }
        return dfs(node);
    }
}
