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

    let curr = head;
    let prev = null;
    let newHead = null;
    let map = new Map();

    while(curr != null){
        let temp = new Node(curr.val, null, null);
        map.set(curr, temp);  // means in map we store new node corres to org node
        // a(org Node) => x(correspond new copy node)

        if(newHead == null){
            newHead = temp;
            prev = newHead;
        }else{
            prev.next = temp;
            prev = temp;
        }

        curr = curr.next;
    }

    // fill random pointers
    curr = head;
    let newCurr = newHead;

    while(curr != null){
        if(curr.random == null){
            newCurr.random = null;
        }else{
            /* let randomFromOriginalNode = curr.random;
            let randomCorrespondFromOrgNode = map[randomFromOriginalNode];

            newCurr.random = randomCorrespondFromOrgNode;
            */
            newCurr.random = map.get(curr.random);
        }

        newCurr = newCurr.next;
        curr = curr.next;
    }
    console.log(newHead);
    return newHead;
};