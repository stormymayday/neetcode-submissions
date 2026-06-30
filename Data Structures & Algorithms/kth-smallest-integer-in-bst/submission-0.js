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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        if(root === null) {
            return -Infinity;
        }

        let count = 0;
        let res = null;

        function helperDFS(node) {
            
            // Base Case
            if(node === null || res !== null) {
                return;
            }

            // Recurse Left
            helperDFS(node.left);

            // Visit Current
            count += 1;
            if(count === k) {
                res = node;
                return; // Early Exit
            }

            // Recurse Right
            helperDFS(node.right);

        }

        helperDFS(root);

        // Optinal Guard Statement - if there are fewer than k nodes
        if(res !== null) {
            return res.val;
        } else {
            return -Infinity;
        }

    }
}
