/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode fast = head;
        int i = 0;

        while(i < n && fast != null){
            i++;
            fast = fast.next;
        }

        if(fast == null){
            ListNode newHead = head.next;
            head.next = null;
            return newHead;
        }

        ListNode slow = head;

        while(fast.next != null){
            slow = slow.next;
            fast = fast.next;
        }
        ListNode tobeRemoved = slow.next;
        slow.next = tobeRemoved.next;
        tobeRemoved.next = null;
        return head;
    }
}