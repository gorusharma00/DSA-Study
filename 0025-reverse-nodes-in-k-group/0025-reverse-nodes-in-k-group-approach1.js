/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function find_kthNode(temp, k){
    while(temp !== null && k > 1){
        temp = temp.next
        k--;
    }

    return temp;
}

function reverseList(head){
    let prev = null;
    let curr = head;
    let nextNode = null;

    while(curr != null){
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}

var reverseKGroup = function(head, k) {
    let temp = head;
    let prevNode = null;

    while(temp != null){
        let kNode = find_kthNode(temp, k)  // find last node of k group
        if(kNode == null){  // case where list does not have enough node for k
            if(prevNode){   // suppose in starting only elements that are less than k in that case prevNode does not exist
                prevNode.next = temp;
            }
            break;
        }

        let nextNode = kNode.next;
        kNode.next = null   // disconnect the k group to reverse it
        reverseList(temp);

        if(temp == head){
            head = kNode;
        }else{
            prevNode.next = kNode;
        }

        prevNode = temp;
        temp = nextNode;
    }

    return head;
};