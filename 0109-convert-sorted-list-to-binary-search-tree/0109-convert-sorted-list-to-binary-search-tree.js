/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 function middleofLL(head, tail){
    let fast = head;
    let slow = head;

    while(fast!= tail && fast.next != tail){
        fast = fast.next.next;
        slow = slow.next
    }

    return slow;
 }

function makeBST(head, tail){
    if(head == null) return null;
    if(head == tail) return null;

    let mid = middleofLL(head, tail);
    let root = new TreeNode(mid.val);

    root.left = makeBST(head, mid);
    root.right = makeBST(mid.next, tail);

    return root;

}
var sortedListToBST = function(head) {
    return makeBST(head, null);
};