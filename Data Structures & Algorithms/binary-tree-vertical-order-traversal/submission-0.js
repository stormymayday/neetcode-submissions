/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    verticalOrder(root) {

        const res = [];

        if(root === null) {
            return res;
        }

        const colToVals = new Map();
        
        // will help fill out the result in linear time
        let minCol = 0;
        let maxCol = 0;

        let queue = [[root, 0]]; // [node, column, where 0 is 'middle']

        // Phase 1: BFS
        while(queue.length > 0) {

            const nextQueue = [];

            for(let i = 0; i < queue.length; i += 1) {

                const [currNode, currCol] = queue[i];

                minCol = Math.min(minCol, currCol);
                maxCol = Math.max(maxCol, currCol);

                if(!colToVals.has(currCol)) {
                    colToVals.set(currCol, []);
                }
                colToVals.get(currCol).push(currNode.val);

                if(currNode.left !== null) {
                    nextQueue.push([currNode.left, currCol - 1]);
                }

                if(currNode.right !== null) {
                    nextQueue.push([currNode.right, currCol + 1]);
                }

            }

            queue = nextQueue;

        }

        // Phase 2: fill up the result
        for(let col = minCol; col <= maxCol; col += 1) {

            res.push(colToVals.get(col));

        }


        return res;
    }
}
