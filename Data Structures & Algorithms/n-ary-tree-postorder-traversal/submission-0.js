/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        const res = [];
        function helper(root) {
            if(root === null) {
                return;
            }

            for(const child of root.children) {

                helper(child);

            }

            res.push(root.val);
        }
        helper(root);
        return res;
    }
}
