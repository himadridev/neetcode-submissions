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
        // Handle cases where one list is empty.
        if (list1 === null) return list2;
        if (list2 === null) return list1;

        // Dummy node simplifies building the merged list.
        let dummy = new ListNode();
        let curr = dummy;

        // Merge by always choosing the smaller current node.
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }

            // Move to the newly added node.
            curr = curr.next;
        }

        // Attach the remaining nodes from the non-empty list.
        if (list1 === null) {
            curr.next = list2;
        }

        if (list2 === null) {
            curr.next = list1;
        }

        // Skip the dummy node and return the merged list.
        return dummy.next;
    }
}
