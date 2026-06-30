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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {

            if(root === null) {
                return null;
            }

            if(key < root.val) {
                root.left = this.deleteNode(root.left, key);
            } else if(key > root.val) {
                root.right = this.deleteNode(root.right, key);
            } 
            // current root is the target
            else {
                // root has not children
                if(root.left === null && root.right === null) {
                    root = null;
                } 
                // root only has a right subtree
                else if(root.left === null) {
                    root = root.right;
                }
                // root only has a left subtree
                else if(root.right === null) {
                    root = root.left;
                }
                // root has both subrees
                else {
                    // need to find min value in the right subtree
                    const minValue = this.getMinValue(root.right);

                    // overwrite value at current root with the min value
                    root.val = minValue;

                    // delete the minvalue root from the right subtree
                    root.right = this.deleteNode(root.right, minValue);

                }

            }

            return root;

    }

    getMinValue(root) {
        while(root.left !== null) {
            root = root.left;
        }
        return root.val;
    }


}
