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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 == null && list2 == null) return null;
        if (list1 == null && list2 !== null) return list2;
        if (list1 !== null && list2 == null) return list1;

        let curr1 = list1;
        let curr2 = list2;

        // identify the smallest node to start
        let curr = null;
        if (curr1.val >= curr2.val) {
            curr = curr2;
            curr2 = curr2.next;
        } else {
            curr = curr1;
            curr1 = curr1.next;
        }

        let head = curr;
        while (curr1 !== null && curr2 !== null) {
            if (curr1.val >= curr2.val) {
                curr.next = curr2;
                curr2 = curr2.next;
            } else {
                curr.next = curr1;
                curr1 = curr1.next;
            }
            curr = curr.next;
        }

        if (curr1 == null) {
            curr.next = curr2;
        } else {
            curr.next = curr1;
        }

        return head;
    }
}
