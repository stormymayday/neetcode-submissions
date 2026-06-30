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
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return head;

        let before = null;
        let current = head;
        let after = null;

        while(current) {
            after = current.next;
            current.next = before;
            before = current;
            current = after;
        }

        head = before;
        return head;

    }
}
