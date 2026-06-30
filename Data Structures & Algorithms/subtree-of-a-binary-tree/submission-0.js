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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        if(root === null) {
            return false;
        }

        if(subRoot == null) {
            return true;
        }

        // Phase 1: Find subRoot inside the 'root' tree
        const stack = [root];
        while(stack.length > 0) {

            const currNode = stack.pop();

            if(currNode.val === subRoot.val) {
                // Phase 2: perform 'Same Tree' algorithm here
                const result = this.sameTree(currNode, subRoot);
                if(result === true) {
                    return true;
                }
            }

            if(currNode.left !== null) {
                stack.push(currNode.left);
            }

            if(currNode.right !== null) {
                 stack.push(currNode.right);
            }

        }

        return false;

    }

    sameTree(p, q) {

        if(p === null && q === null) {
            return true;
        }

        if(p === null || q === null) {
            return false;
        }

        if(p.val !== q.val) {
            return false;
        }

        return this.sameTree(p.left, q.left) && this.sameTree(p.right, q.right);

    }
}
