/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
        if(root === null) {
            return null;
        }

        if(root === q || root === p) {
            return root;
        }

        const leftSearchResult = this.lowestCommonAncestor(root.left, p, q);
        const rightSearchResult = this.lowestCommonAncestor(root.right, p, q);

        if(leftSearchResult !== null && rightSearchResult !== null) {
            return root;
        }

        if(leftSearchResult === null && rightSearchResult === null) {
            return null;
        }

        return leftSearchResult !== null ? leftSearchResult : rightSearchResult;
    }
}
