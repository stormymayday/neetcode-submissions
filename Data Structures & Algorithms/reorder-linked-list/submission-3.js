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

        const arr = [];
        let current = head;

        while(current) {
            arr.push(current);
            current = current.next;
        }

        let left = 0
        let right = arr.length - 1;
        while(left < right) {

            arr[left].next = arr[right];

            left++;

            // Edge Case: If counters are equal or crossed

            arr[right].next = arr[left];

            right--;
        }

        // Fix the tail
        arr[left].next = null;

    }
}
