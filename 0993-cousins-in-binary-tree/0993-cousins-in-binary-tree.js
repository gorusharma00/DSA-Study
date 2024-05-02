/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // head of the ll
        this.tail = null; // tail of the ll
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        if(this.head == null) return undefined;
        return this.head.data;
    }

    getTail() {
        if(this.tail == null) return undefined;
        return this.tail.data;
    }

    removeAtHead() {
        if(this.head == null) return; // ll is empty
        const newHead = this.head.next; // we will store the new head
        this.head.next = null; // disconnect the old head from the ll
        this.head = newHead; // allocating the brand new head

        // if head beconmes null after removal of the node means ll is empty now
        if(this.head == null) {
            this.tail = null;
        }
    }

    addAtTail(data) {
        if(this.head == null) {
            // ll is empty
            const newNode = new Node(data);
            this.head = newNode;
            this.tail = newNode;
            return;
        } else {
            const newNode = new Node(data);
            this.tail.next = newNode; // we are attaching the new node after the prev tail
            this.tail = newNode; // we updated the tail property
        }
    }
}

class queue {
    constructor() {
        this.ll = new LinkedList(); // we will create a brand new empty list
    }
    enqueue(data) {
        this.ll.addAtTail(data);
    }

    dequeue() {
        this.ll.removeAtHead();
    }

    isEmpty() { 
        return this.ll.isEmpty();
    }

    front() {
        return this.ll.getHead();
    }

    back() {
        return this.ll.getTail();
    }
}

var isCousins = function(root, x, y) {
    let qu = new queue();

    qu.enqueue(root);
    qu.enqueue(null);

    function isTargetNode(node){
        return node != null && (node.val == x || node.val == y);
    }

    let targets_at_level = 0;  // means how many target matches to given x and y at that level

    while(!qu.isEmpty()){
        let curr = qu.front();
        let targets_childNode = 0  // how many child node matches
        qu.dequeue();

        if(curr == null){
            if(!qu.isEmpty()){
                qu.enqueue(null);
                if(targets_at_level > 0){
                    return targets_at_level == 2;
                }
            }
        }else{
            if(curr.left){
                if(isTargetNode(curr.left)){
                    targets_childNode += 1
                }
                qu.enqueue(curr.left);
            }
            if(curr.right){
                if(isTargetNode(curr.right)){
                    targets_childNode += 1
                }
                qu.enqueue(curr.right);
            }

            if(targets_childNode == 2){  // means given x and y match at same depth
                return false;
            }
        }
        targets_at_level += targets_childNode;
    }

    return false;
        
};