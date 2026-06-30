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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        if(root === null) {
            return 0;
        }
        if(root.val > high) {
            return this.rangeSumBST(root.left, low, high);
        } else if(root.val < low) {
            return this.rangeSumBST(root.right, low, high);
        } else {
            return root.val + this.rangeSumBST(root.left, low, high) + this.rangeSumBST(root.right, low, high);
        }
    }
}
