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

        const dummyNode = new ListNode();
        let current = dummyNode;

        let left = head;

        while(left) {

            // left first
            let temp = left;
            left = left.next; // can be null
            temp.next = null; // sever connection
            current.next = temp; // attach left

            current = current.next; // move current

            // right last
            let prev = left; // can be null
            if(prev) {

                let right = prev.next; // can be null

                if(right) {

                    while(right.next){ // stop when 'right' is last
                        prev = right;
                        right = right.next;
                    }
                    
                    current.next = right; // attach 'right'
                    prev.next = null; // sever connection

                    current = current.next; // move current forward

                }
                
            }
            
        }

        return dummyNode.next;

    }
}
