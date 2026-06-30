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
    rob(root) {

        // Bottom-Up
        function helper(root) {

            if(root === null) {
                return [0, 0];
            }

            const [withRootLeft, withoutRootLeft] = helper(root.left);
            const [withRootRight, withoutRootRight] = helper(root.right);

            const maxWithoutRoot = Math.max(withRootLeft, withoutRootLeft) + Math.max(withRootRight, withoutRootRight);
            return [root.val + withoutRootLeft + withoutRootRight, maxWithoutRoot];

        }

        const [maxWithRoot, maxWithoutRoot] = helper(root);

        return maxWithRoot > maxWithoutRoot ? maxWithRoot : maxWithoutRoot;

    }
}
