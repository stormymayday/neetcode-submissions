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
     * @return {number[]}
     */
    preorderTraversal(root) {
        if(!root) {
            return [];
        }
        const result = [];
        const stack = [root];
        while(stack.length > 0) {
            const current = stack.pop();
            result.push(current.val);
            if(current.right) {
                stack.push(current.right);
            }
            if(current.left){
                stack.push(current.left);
            }
        }
        return result;
    }
}
