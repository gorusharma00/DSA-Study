/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if(head.next == null) return head;
    let fast = head;
    let slow = head;

    while(fast.next.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast.next == null){
            return slow;
        }
    }

    if(fast.next != null){
        slow = slow.next;
    }

    return slow;
};