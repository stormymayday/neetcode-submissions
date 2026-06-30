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
     * @return {void}
     */
    reorderList(head) {

        if(!head) {
            return;
        }
        
        // 1. Finding the middle:
        let slow = head;
        let fast = head.next;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // now 'slow' is at the middle
        // therefore 'slow.next' is at the 'head' of the second list
        let second = slow.next;

        // splitting the list in half
        slow.next = null;

        // 2. Reversing the second half
        let prev = null;
        while(second) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }
        // now 'prev' is the new 'head' of the second list
        
        // 3. Merging
        let first = head;
        second = prev; 
        // keep going until one of the pointers ('first' or 'prev') is null
        // knowing that second half can be smaller will go with 'second'
        while(second) {

            // Saving references to the next nodes
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            first = firstNext;

            second.next = first;
            second = secondNext;

        }


    }
}
