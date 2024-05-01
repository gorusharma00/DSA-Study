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
var insertionSortList = function(head) {
    let start = new ListNode(-1);
    start.next = head;

    let curr = head;
    let prev = start;

    while(curr != null){
        if(curr.next != null && curr.next.val < curr.val){
            while(prev.next != null && prev.next.val < curr.next.val){
                prev = prev.next;
            }

            let temp = prev.next;
            prev.next = curr.next;
            curr.next = curr.next.next;
            prev.next.next = temp;

            prev = start;
            
        }else{
            curr = curr.next;
        }
    }

    return start.next;
};