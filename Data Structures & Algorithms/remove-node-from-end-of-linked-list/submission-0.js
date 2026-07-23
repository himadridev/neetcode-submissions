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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Dummy node simplifies removing the head node.
        const sentinel = new ListNode();
        sentinel.next = head;

        let slow = sentinel;
        let fast = sentinel;

        // Move `fast` n nodes ahead to maintain a gap of n nodes.
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        // Move both pointers together until `fast` reaches the last node.
        // `slow` will then point to the node before the target node.
        while (fast.next !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        // Remove the target node.
        slow.next = slow.next.next;

        return sentinel.next;
    }
}
