/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head == null) return null;

    // 1. Insert the new nodes duplicates of org in between them
    let curr = head;

    while(curr != null){
        let currNewNext = curr.next;    // A -> B
        curr.next = new Node(curr.val);  // A -> x -> B
        curr.next.next = currNewNext;
        
        curr = currNewNext;  // curr = B
    }

    // 2.Deep copy of random pointers
    curr = head;

    while(curr != null && curr.next != null){
        if(curr.random == null){
            curr.next.random = null;
        }else{
            curr.next.random = curr.random.next;   // to undertstand see notes
        }

        curr = curr.next.next;
    }

    // 3. Separate the Linked List
    let newHead = head.next;
    let newCurr = newHead;
    curr = head;

    while(curr != null && newCurr != null){
        curr.next =  curr.next == null ? null :  curr.next.next;                     // instead curr.next.next we take this for precaution 
                                            // because if curr.next go null it breaks;

        newCurr.next =  newCurr.next == null ? null :  newCurr.next.next; 

        curr = curr.next;
        newCurr = newCurr.next;
    }

    return newHead;

};

// Debatable space complexity => O(N) / O(1);