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
                return 0;
            }

            const leftSubtreeHeight = helper(node.left);
            const rightSubtreeHeight = helper(node.right);

            // longest path at current node is height of it's left subtree and right subtree
            longestPath = Math.max(longestPath, (leftSubtreeHeight + rightSubtreeHeight));

            // returning height at current node
            return 1 + Math.max(leftSubtreeHeight, rightSubtreeHeight);

        }

        helper(root);

        return longestPath;

    }
}
