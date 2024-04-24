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
var deleteDuplicates = function(head) {
    let curr = head;

    while(curr != null && curr.next != null){ // here curr.next is because suppose curr become tail so curr.next does not exist and fails
        if(curr.val == curr.next.val){
            let duplicate_removal = curr.next;
            curr.next = duplicate_removal.next;
            duplicate_removal.next = null;
        }else{
            curr = curr.next;
        }
    }

    return head;
};