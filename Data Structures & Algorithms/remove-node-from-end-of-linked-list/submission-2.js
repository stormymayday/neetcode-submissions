class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        const dummyNode = new ListNode(-1, head);
        let current = dummyNode;

        // 1. Find the length
        let length = 0;
        while(current) {
            current = current.next;
            if(current) {
                length++;
            }
        }

        // Check if n is in range
        if(n > length) {
            return;
        }
        // Now we know that 'n' is in range
        
        // 2. Find 'index' of the target node
        let prev = dummyNode;
        current = dummyNode;
        let target = length - n + 1;
        let i = 0;
        while(i !== target) {
            
            prev = current;
            current = current.next;
            i++;
            
        }
        // now 'current' should be at the 'target' node

        // 3. Removal
        prev.next = current.next;
        current.next = null;

        // issue was here (was returning the original 'head')
        return dummyNode.next;

    }
}