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
    maxPathSum(root) {

        if(root === null) {
            return -Infinity;
        }
        
        // sum can be negtaive
        let res = -Infinity;

        function helperDFS(node) {

            if(node === null) {
                return 0;
            }

            
            const leftSubtree = helperDFS(node.left);
            const rightSubtree = helperDFS(node.right);

            // If we are splitting at this node
            res = Math.max(res, (node.val + Math.max(0, leftSubtree) + Math.max(0, rightSubtree)));

            // If we a not splitting
            return node.val + Math.max(0, leftSubtree, rightSubtree);

        }

        helperDFS(root);

        return res;

    }
}
