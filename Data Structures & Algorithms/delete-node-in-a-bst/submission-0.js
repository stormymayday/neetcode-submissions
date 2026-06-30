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

        const helper = (node, val) => {
            // Base Case
            if(node === null) {
                return null;
            }

            if(val < node.val) {
                node.left = this.deleteNode(node.left, val);
            } else if(val > node.val) {
                node.right = this.deleteNode(node.right, val);
            } 
            // current node is the target
            else {
                // node has not children
                if(node.left === null && node.right === null) {
                    node = null;
                } 
                // node only has a right subtree
                else if(node.left === null) {
                    node = node.right;
                }
                // node only has a left subtree
                else if(node.right === null) {
                    node = node.left;
                }
                // node has both subrees
                else {
                    // need to find min value in the right subtree
                    const minValue = this.getMinValue(node.right);

                    // overwrite value at current node with the min value
                    node.val = minValue;

                    // delete the minvalue node from the right subtree
                    node.right = this.deleteNode(node.right, minValue);

                }

            }

            return node;

        }

        root = helper(root, key);
        return root;

    }

    getMinValue(root) {
        while(root.left !== null) {
            root = root.left;
        }
        return root.val;
    }


}
