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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        if(root === null) {
            return 0;
        }

        let longestPath = 0;

        function helper(node) {

            if(node === null) {
                return 0; // height of a null node is -1 or 0?
            }

            const leftMax = helper(node.left);
            const rightMax = helper(node.right);

            longestPath = Math.max(longestPath, (leftMax + rightMax));

            return 1 + Math.max(leftMax, rightMax);

        }

        helper(root);

        return longestPath;

    }
}
