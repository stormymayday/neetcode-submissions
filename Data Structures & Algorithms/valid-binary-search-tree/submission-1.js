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
     * @return {boolean}
     */
    isValidBST(root) {
        const result = this.inOrder(root);
        if(result.length < 2) {
            return true;
        }
        for(let i = 0; i < result.length - 1; i += 1) {
            if(result[i] >= result[i + 1]) {
                return false;
            }
        }
        return true;
    }

    inOrder(root) {
        const result = [];
        if(!root) {
            return result;
        }
        function traverse(root) {
            if(root === null) {
                return;
            }

            traverse(root.left);
            result.push(root.val);
            traverse(root.right);
        }
        traverse(root);
        return result;
    }
}
