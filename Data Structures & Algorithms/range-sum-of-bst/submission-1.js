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

        let sum = 0;

        if(root.val >= low && root.val <= high) {
            sum += root.val;
        }

        if(root.val > low) {
            sum += this.rangeSumBST(root.left, low, high);
        }

        if(root.val < high) {
            sum += this.rangeSumBST(root.right, low, high);
        }

        return sum;

    }
}
