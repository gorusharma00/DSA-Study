/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null || head.next == null){
        return head;
    }

    let last = reverseList(head.next); // last = future head

    
    
    head.next.next = head;  // means suppose ll with only two node 1 and 2, 1 is head so
                            // head.next is 2 and 2.next = head;
                            
    head.next = null

    return last;
};

/*
     let newHead = head.next; // can also be written as
     newHead.next = head; 
*/

// time complexity => o(n)
// space complexity => o(n)
