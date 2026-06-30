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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        const dummyNode = new ListNode();
        let current = dummyNode;

        let carry = 0;
        while(l1 || l2 || carry) {

            const num1 = l1 ? l1.val : 0;
            const num2 = l2 ? l2.val : 0;

            let result = num1 + num2 + carry;

            carry = Math.floor(result/10);

            result = result % 10;

            const newNode = new ListNode(result);

            current.next = newNode;

            current = current.next;
            if(l1) {
                l1 = l1.next;
            }
            if(l2) {
                l2 = l2.next;
            }

        }

        return dummyNode.next;

    }
}
