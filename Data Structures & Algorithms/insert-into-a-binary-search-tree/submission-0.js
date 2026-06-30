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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        
        // Edge Case: null root
        if(root === null) {
            const newNode = new TreeNode(val);
            return newNode;
        }

        // let prev = null;
        let curr = root;

        while(true) {

            if(val < curr.val) {

                if(curr.left == null) {
                    const newNode = new TreeNode(val);
                    curr.left = newNode;
                    break;
                } else {
                    // prev = curr;
                    curr = curr.left;
                }

            } else if(val > curr.val) {

                if(curr.right == null) {
                    const newNode = new TreeNode(val);
                    curr.right = newNode;
                    break;
                } else {
                    // prev = curr;
                    curr = curr.right;
                }

            }

        }

        return root;

    }
}
