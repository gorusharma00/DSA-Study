/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let fast = head;
    let slow = head;

    while(fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
    }

    let mid = slow;

    let prev = null;
    let curr = mid;
    let nextNode = null;

    while(curr != null){
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
        // prev.next = null;
    }

    let h1 = head;
    let h2 = prev;
    let max = -Infinity;

    while(h1 != null && h2 != null){
        max = Math.max(max, h1.val + h2.val);
        h1 = h1.next;
        h2 = h2.next;
    }
    

    return max;
};