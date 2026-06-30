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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(a, b) {

        // Base Case 1: Structural check - both are null
        if(a === null && b === null) {
            return true;
        }

        // Base Case 2: Structural check - one is null
        if(a === null || b === null) {
            return false;
        }

        // Base Case 3: Value check - not the same
        if(a.val !== b.val) {
            return false;
        }

        return this.isSameTree(a.left, b.left) && this.isSameTree(a.right, b.right);
    }
}
