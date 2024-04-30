/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA == null && headB == null) return null;
    let temp1 = headA;
    let temp2 = headB;

    while(temp1 !== temp2){
        temp1 = temp1 == null ? headB : temp1.next;
        temp2 = temp2 == null ? headA : temp2.next;
       
    }

    return temp1;
};