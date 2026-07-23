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
        let list1 = head;

        // find the middle of the linked-list
        let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // from the middle node, reverse the second half of linked-list
        let prev = null;
        let curr = slow.next;
        while (curr !== null) {
            let temp = curr;
            curr = curr.next;
            temp.next = prev;
            prev = temp;
        }

        // this is important
        slow.next = null;
        let list2 = prev;

        // now we have two lists rearrage the node alternatively
        while (list2 !== null) {
            let temp1 = list1.next;
            let temp2 = list2.next;

            list2.next = temp1;
            list1.next = list2;

            list1 = temp1;
            list2 = temp2;
        }
    }
}
