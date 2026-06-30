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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        if(lists.length === 0) {
            return null;
        }

        // Step 1: Extract all the values
        const values = [];
        for(let i = 0; i < lists.length; i++) {
            
            let list = lists[i];
            while(list) {
                values.push(list.val);
                list = list.next;
            }
        }
        
        // Step 2: Sort all the values
        values.sort((a,b) => a - b);

        // Step 3: Create new sorted linked list;
        const dummyNode = new ListNode();
        let current = dummyNode;
        for(let i = 0; i < values.length; i++) {
            const value = values[i];
            const newNode = new ListNode(value);
            current.next = newNode;
            current = current.next;
        }

        // Step 4: return the linked list
        return dummyNode.next;

    }
}
