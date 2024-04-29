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
    let dummyNode = new ListNode(-1);

    let temp1 = l1;
    let temp2 = l2;
    let curr = dummyNode;

    let carry = 0;

    while(temp1 != null || temp2 != null){
        let sum = carry;

        if(temp1) sum += temp1.val;
        if(temp2) sum += temp2.val;

        let newNode = new ListNode( sum % 10);
        carry = Math.floor(sum / 10);

        curr.next = newNode;
        curr = curr.next;

        if(temp1) temp1 = temp1.next;
        if(temp2) temp2 = temp2.next;
    }

    if(carry > 0){
        curr.next = new ListNode(carry);
    }

    return dummyNode.next;
};

// time => o(max(n, m))
// space => o(max(n, m))