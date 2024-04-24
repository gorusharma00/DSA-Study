/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let fast = head;
    let i = 0;

    while(i < k -1 && fast != null){
        i++;
        fast = fast.next;
    }
    let a = fast;
    let slow = head;

    while(fast.next != null){
        slow = slow.next;
        fast = fast.next;
    }

    let temp = a.val;
    a.val = slow.val;
    slow.val = temp;

    return head;

};