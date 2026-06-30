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

        // Keep cutting the list in half while it's length is greater than 1
        while(lists.length > 1) {
            
            // 
            const mergedLists = [];

            // Iteratively merge adjacent lists
            for(let i = 0; i < lists.length; i+=2) {

                const list1 = lists[i];
                const list2 = lists[i + 1] || null; // can be out of bounds

                mergedLists.push(this.merge(list1, list2));
            }

            // Overwrite / cut in half
            lists = mergedLists;

        }

        return lists[0];

    }

    merge(list1, list2) {
        const dummyNode = new ListNode();
        let current = dummyNode;
        while(list1 && list2) {
            if(list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        if(list1) {
            current.next = list1;
        }
        if(list2) {
            current.next = list2;
        }
        return dummyNode.next;
    }
}
