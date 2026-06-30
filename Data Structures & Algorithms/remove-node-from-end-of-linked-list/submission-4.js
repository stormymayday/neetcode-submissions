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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        
        // Helps with edge cases
        const dummyNode = new ListNode(-1, head);

        let left = head;
        let right = head;

        // Advance right
        let i = 0;
        while(i < n && right) {
            right = right.next;
            i++;
        }

        // Move both forward until 'right' goes out of bounds
        let prev = dummyNode; // for deletion
        while(right) {

            prev = left; // keep 'prev' one step behind 'left'

            left = left.next;
            right = right.next;
        }
        // Now 'left' should be at the 'target' node

        // Removal
        prev.next = left.next;
        left.next = null;

        return dummyNode.next;
    }
}
