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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let a = headA;
        let b = headB;

        while (a !== b) {
            a = (a === null) ? headB : a.next;
            b = (b === null) ? headA : b.next;
        }

        return a
    }
}
