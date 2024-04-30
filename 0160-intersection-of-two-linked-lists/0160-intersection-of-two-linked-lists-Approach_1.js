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

    let temp = headA;
    let map = new Map();

    while(temp != null){
        map.set(temp, 1);
        temp = temp.next;
    }

    temp = headB;

    while(temp != null){
        if(map.has(temp)){
            return temp;
        }

        temp = temp.next;
    }

    return null;
};

// time => o(n + m)
// space = o(n) // n is number of nodes in first list
