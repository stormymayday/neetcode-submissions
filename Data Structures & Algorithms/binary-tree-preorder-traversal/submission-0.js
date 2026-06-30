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
    preorderTraversal(root) {
        if(!root) {
            return [];
        }
        const result = [];
        function traverse(root, arr) {
            if(!root) {
                return arr;
            }

            arr.push(root.val);
            traverse(root.left, arr);
            traverse(root.right, arr);

            return arr;
        }

        traverse(root, result);
        return result;
    }
}
