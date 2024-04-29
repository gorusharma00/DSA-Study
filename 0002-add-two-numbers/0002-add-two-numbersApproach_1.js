/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let temp1 = l1;
    let temp2 = l2;


    let carry = 0;
    let curr = dummyHead;

    while(temp1 != null || temp2 != null){

        let x = (temp1 != null) ? temp1.val : 0;  // if one list become exhausted so fake it like it has zero
        let y = (temp2 != null) ? temp2.val : 0;

        let sum = x + y + carry;
        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if(temp1 != null)temp1 = temp1.next;   // if it is null then don't go next stay on that node give zero
                                               // by upper check case 
        if(temp2 != null)temp2 = temp2.next;
    }

    if(carry > 0){
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
};