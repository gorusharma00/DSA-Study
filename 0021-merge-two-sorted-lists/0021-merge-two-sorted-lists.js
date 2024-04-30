/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 == null && list2 == null) return null;

    if(list1 == null) return list2;
    if(list2 == null) return list1;

    let temp1 = list1;
    let temp2 = list2;

    let dummyHead = null;
    let curr = dummyHead;

    while(temp1 != null && temp2 != null){
        if(temp1.val < temp2.val){
            if(curr == null){
                dummyHead = new ListNode(temp1.val);
                curr = dummyHead;
            }else{
                curr.next = new ListNode(temp1.val);
                curr = curr.next;
            }
            temp1 = temp1.next;
        } else{
            if(curr == null){
                dummyHead = new ListNode(temp2.val);
                curr = dummyHead;
            }else{
                curr.next = new ListNode(temp2.val);
                curr = curr.next;
            }

            temp2 = temp2.next;
        }
        
    }

    while(temp1 != null){
        curr.next = new ListNode(temp1.val);
        curr = curr.next;
        temp1 = temp1.next;
    }

    while(temp2 != null){
        curr.next = new ListNode(temp2.val);
        curr = curr.next;
        temp2 = temp2.next;
    }

    return dummyHead;
};