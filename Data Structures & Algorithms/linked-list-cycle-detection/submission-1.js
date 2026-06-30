/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        if(!head) {
            return false;
        }

        const set = new Set();
        let current = head;
        while(current) {

            if(set.has(current)) {
                return true;
            }

            set.add(current);
            current = current.next;

        }

        return false;

    }
}
