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
        // Edge Case: empty lists array
        if(lists.length === 0) {
            return null;
        }

        // Keep merging current and previous lists
        for(let i = 0; i < lists.length; i++) {
            lists[i] = this.merge(lists[i-1] || null, lists[i]);
        }

        // Last list will contain the result of all previous merges
        return lists[lists.length - 1];


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
