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
    zigzagLevelOrder(root) {

        const res = [];

        if(root === null) {
            return res;
        }

        let queue = [root];
        let level = 0;

        while(queue.length > 0) {

            const nextQueue = [];
            let levelVals = [];

            for(let i = 0; i < queue.length; i += 1) {

                const currNode = queue[i];

                levelVals.push(currNode.val);

                if(currNode.left !== null) {
                    nextQueue.push(currNode.left);
                }

                if(currNode.right !== null) {
                    nextQueue.push(currNode.right);
                }

            }

            if(level % 2 === 0) {
                res.push(levelVals);
            } else {
                res.push(levelVals.reverse());
            }
            level += 1;
            queue = nextQueue;

        }

        return res;

    }
}
