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
    postorderTraversal(root) {
        const result = [];
        function traverse(root, arr) {
            if(!root) {
                return arr;
            }
            traverse(root.left, arr);
            traverse(root.right, arr);
            arr.push(root.val);
            return arr;
        }
        return traverse(root, result);
    }
}
