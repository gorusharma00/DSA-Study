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
    let temp = headA;
    let n1 = 0;

    while(temp != null){
        n1++;
        temp = temp.next;
    }

    temp = headB;
    let n2 = 0;
    while(temp != null){
        n2++;
        temp = temp.next;
    }

    if(n1 < n2){
        return collisionPoint(headA, headB, n2 - n1);
    }else{
        return collisionPoint(headB, headA, n1 - n2);
    }
};

function collisionPoint(t1, t2, d){
    while(d){  // o(n2-n1)
        d--;
        t2 = t2.next;
    }

    while(t1 != t2){  // o(n1)
        t1 = t1.next;
        t2 = t2.next;
    }

    return t1;
}

/*
Here approach is just calcualte lengths of both list,
and then move pointer of bigger list so that they can start from
same point.

time => o(n1) + o(n2) + o(n2-n1) + o(n1) => o(n1 + 2n2);

space = > o(1)

*/