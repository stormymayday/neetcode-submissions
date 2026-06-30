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
     * @return {boolean}
     */
    isCompleteTree(root) {

        if(root === null) {
            return true;
        }

        let queue = [root];
        let nullFound =false;

        while(queue.length > 0) {

            const nextQueue = [];

            for(let i = 0; i < queue.length; i += 1) {

                const currNode = queue[i];

                if(currNode === null) {
                    nullFound = true;
                } else {
                    if(nullFound === true) {
                        return false;
                    }
                    nextQueue.push(currNode.left);
                    nextQueue.push(currNode.right);
                }

            }

            queue = nextQueue;

        }

        return true;
    }
}
