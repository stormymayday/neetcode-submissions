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
     * @return {number[]}
     */
    inorderTraversal(root) {
        if(!root) {
            return [];
        }

        const result = [];
        function traverse(root) {
            if(!root) {
                return;
            }

            traverse(root.left);
            result.push(root.val);
            traverse(root.right);
        }
        traverse(root);
        return result;

    }
}
