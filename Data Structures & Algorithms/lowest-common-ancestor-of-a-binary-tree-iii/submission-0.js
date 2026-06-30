/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    /**
     * @param {Node} p
     * @param {Node} q
     * @return {Node}
     */
    lowestCommonAncestor(p, q) {

        if(p === null || q === null) {
            return null;
        }

        let pStart = p;
        let qStart = q;

        while(p !== q) {

            if(p.parent !== null) {
                p = p.parent;
            } else {
                p = qStart;
            }

            if(q.parent !== null) {
                q = q.parent;
            } else {
                q = pStart;
            }

        }

        return p;

    }
}
