/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size = 0;
    let tailNode = head;

    while(tailNode != null){
        size++;
        tailNode = tailNode.next;
    }

    size -= n;
    if(size == 0){
        return head.next;
    }

    let i = 0;
    let prev = null;
    let curr = head
    while( i < size && curr != null){
        i++;
        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next;
    curr.next = null;

    return head;

};