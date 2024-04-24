/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let d1 = new ListNode(-1)
    let d2 = new ListNode(-1)

    let t1 = d1;
    let t2 = d2;

    let curr = head;

    while(curr != null){
        let temp = curr;
        curr = curr.next;
        temp.next = null;

        if(temp.val < x){
            t1.next = temp;
            t1 = t1.next; // also write as t1 = temp
        }else{
            t2.next = temp;
            t2 = t2.next;
        }
    }

    t1.next = d2.next;
    d2.next = null;

    let result = d1.next;  //new head
    d1.next = null;

    return result;
    
};