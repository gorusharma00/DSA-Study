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
    if(headA == null || headB == null) return null;

    let t1 = headA
    let t2 = headB;

    while(t1 != t2){
        t1 = t1.next;
        t2 = t2.next;

        if(t1 == t2) return t1; // case where find the collision point don't need to move forward

        if(t1 == null) t1 = headB;
        if(t2 == null) t2 = headA;
    }

    return t1;
};