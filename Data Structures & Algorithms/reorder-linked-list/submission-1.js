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

        const dummyNode = new ListNode(0, head);
        let current = dummyNode;
        let tail = null; // will use it for merging

        // Find length & tail
        let n = 0;
        while(current) {

            if(current.next === null) {
                tail = current;
            }

            current = current.next; // can be null
            if(current) {
                n++;
            }
        }

        if(n > 1) {

            // find middle
            let mid;
            if(n % 2 === 0) {
                mid = n/2;
            } else {
                mid = Math.ceil(n/2);
            }
            current = head;
            let i = 1;
            while(i !== mid) {
                current = current.next;
                i++;
            }
            // current should be at middle now (current.next is start of the second list)

            // save reference to the head of the second list;
            const headTwo = current.next;

            // server connection
            current.next = null;

            // Reverse second list
            let prev = null;
            current = headTwo;
            while(current) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            // Merge two lists
            current = dummyNode;
            while(tail) { 
                
                current.next = head;

                head = head.next;

                current = current.next;

                current.next = tail;

                tail = tail.next;

                current = current.next;

            }

            if(head) {
                current.next = head;
            }


            return dummyNode.next;
        } else {
            return head;
        }

    }
}
