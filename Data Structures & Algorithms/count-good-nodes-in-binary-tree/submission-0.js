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
    goodNodes(root) {

        if(root === null) {
            return 0;
        }

        let count = 0;

        function helper(node, max) {

            if(node === null) {
                return;
            }

            if(node.val >= max) {

                count += 1;

                helper(node.left, node.val);
                helper(node.right, node.val);


            } else {

                helper(node.left, max);
                helper(node.right, max);

            }

        }

        helper(root, root.val);

        return count;

    }
}
