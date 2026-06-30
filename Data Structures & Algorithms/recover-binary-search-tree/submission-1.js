/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {void} Do not return anything, modify root in-place instead.
     */
    recoverTree(root) {

        if(root === null) {
            return null;
        }

        const inorder = [];

        function helper(node) {
            if(node === null) {
                return;
            }
            helper(node.left);
            inorder.push(node);
            helper(node.right);
        }

        helper(root);
        
        let node1 = null;
        let node2 = null;

        for(let i = 0; i < inorder.length - 1; i += 1) {
            
            // Found out of order elemnt
            if(inorder[i].val > inorder[i + 1].val) {
                
                // First Missmatch: node1 has not been set yet
                if(node1 === null) {
                    // Setting both nodes incase this is adjacent missmatch
                    node1 = inorder[i]
                    node2 = inorder[i + 1];

                } 
                // Second Missmatch
                else {
                    // Update node2
                    node2 = inorder[i + 1];
                    break;
                }

            }

        }

        const temp = node1.val;
        node1.val = node2.val;
        node2.val = temp;

    }
}
