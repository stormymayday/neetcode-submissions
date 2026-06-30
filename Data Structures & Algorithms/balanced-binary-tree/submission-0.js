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
    isBalanced(root) {
        function helper(root) {
            if(root === null) {
                return 0;
            }

            const leftHeight = helper(root.left);
            if(leftHeight === -1) {
                return -1;
            }

            const rightHeight = helper(root.right);
            if(rightHeight === -1) {
                return -1
            }

            if(Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            } else {
                return 1 + Math.max(leftHeight, rightHeight);
            }
        }
        return helper(root) > -1;
    }
}
