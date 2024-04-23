var Node = function(data){
    this.data = data;
    this.next = null; // until or unless we attach this new node to a list, the next property should be null
}


var MyLinkedList = function(val) {
    this.head = null    //because initially everything is empty;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let temp = this.head;
    while(i < index && temp != null){
        i++;
        temp = temp.next;
    }
    if(temp == null) return -1;
    return temp.data;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null){
        this.head = new Node(val); // means ll is empty, so this node should become head;
    }else{
        // when ll is not empty
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null){
        // ll is empty
        this.head = new Node(val);
    }else{
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next
        }
        // when loop ends temp will be pointing towards tail node;
        let n = new Node(val);
        temp.next = n;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.head == null && index != 0) return;

    if(this.head == null){
        this.head = new Node(val);;
        return;
    }

    if(index == 0) {
        this.addAtHead(val);
        return;
    }

    let i = 0;
    let prev = null;
    let current = this.head;

    while(i < index && current != null){
        prev = current;
        current = current.next;
        i++;
    }

    if(i != index) return;
    let n = new Node(val);
    prev.next = n;
    n.next = current;
    return;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.head == null) return;
    if(index == 0){
        this.deleteAtHead();
        return;
    }

    let i = 0;
    let prev = null;
    let nodeToBeDel = this.head;

    while(i < index && nodeToBeDel != null){
        prev = nodeToBeDel;
        nodeToBeDel = nodeToBeDel.next;
        i++;
    }

    if(i != index){
        // ll was not having the index
        return;
    }

    if(nodeToBeDel == null) return;

    let newNext = nodeToBeDel.next;
    prev.next = newNext;
    nodeToBeDel.next = null;  // this now will be later garbage collected
    return;
};

MyLinkedList.prototype.deleteAtHead = function(){
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDel = this.head; // curr head
    this.head = nextHead;
    nodeToBeDel.next = null; // prev head disconnected
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */