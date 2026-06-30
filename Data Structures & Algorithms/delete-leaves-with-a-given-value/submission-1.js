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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {

        function helper(node) {

            if(node === null) {
                return null;
            }

            node.left = helper(node.left);
            node.right = helper(node.right);

            if(node.left === null && node.right === null && node.val === target) {
                return null;
            }
            
            return node;

        }
        
        return helper(root);
        
    }
}
