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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {

        if(root === null || p === null || q === null) {
            return root;
        }

        if(root.val === p.val || root.val === q.val) {
            return root;
        }

        const leftSubtree = this.lowestCommonAncestor(root.left, p, q);
        const rightSubtree = this.lowestCommonAncestor(root.right, p, q);

        if(leftSubtree !== null && rightSubtree !== null) {
            return root;
        }

        if(leftSubtree === null && rightSubtree === null) {
            return null;
        }

        return leftSubtree !== null ? leftSubtree : rightSubtree;

    }
}
