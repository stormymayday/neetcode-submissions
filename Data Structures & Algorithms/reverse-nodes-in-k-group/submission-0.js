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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        // Intialize a dummy node with it's next pointing at the head
        const dummyNode = new ListNode(0, head);

        // Initialize a pointer that will point to the node before the group
        // Initally at dummyNode
        let groupPrev = dummyNode;

        while(true) {
            // get the Kth Node using the 'groupPrev' pointer
            const kthNode = this.getKthNode(groupPrev, k);

            // If there is no Kth node
            // Current groupping is not big enough for reversal
            if(kthNode === null) {
                break;
            }

            // Save reference to the node after the current group
            const groupNext = kthNode.next;

            // Reverse the current group
            let prev = groupNext; // not to break the list
            let current = groupPrev.next;
            while(current !== groupNext) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            // Tricky part
            // Save reference to the initially first node of the current group
            // (It should be the last node now)
            const temp = groupPrev.next;

            // Point to the initally last node of the current group
            // (It should be the first node now)
            // New head of the group
            groupPrev.next = kthNode;

            // Shift the 'groupPrev' to (now) last node of the current group
            groupPrev = temp;

        }

        return dummyNode.next;

    }

    // helper method
    getKthNode(current, k) {
        while(current !== null && k > 0) {
            current = current.next;
            k--;
        }
        return current;
    }
}
