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
    levelOrder(root) {
        const result = [];
        if(!root) {
            return result;
        }
        const queue = [root];
        while(queue.length > 0) {
            const level = [];
            let queueLen = queue.length;
            for(let i = 0; i < queueLen; i += 1) {
                const current = queue.shift();
                level.push(current.val);
                if(current.left) {
                    queue.push(current.left);
                }
                if(current.right) {
                    queue.push(current.right);
                }
            }
            result.push(level);
        }
        return result;
    }
}
