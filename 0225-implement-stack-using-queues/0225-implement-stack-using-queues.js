class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null
    }

    removeAtHead(){
        if(this.head == null) return;
        let nextHead = this.head.next;
        let value = this.head.data;
        this.head.next = null;
        this.head = nextHead;

        if(this.head == null){
            this.tail = null;
        }

        return value;
    }

    addAtTail(val){
        let newTail = new Node(val);
        if(this.head == null){
            this.head = newTail;
            this.tail = newTail;
        }
        this.tail.next = newTail;
        this.tail = newTail;
    }

    isEmpty(){
        return this.head == null;
    }

    getHead(){
        if(this.head == null) return undefined;
        return this.head.data;
    }
}

class queue{
    constructor(){
        this.ll = new LinkedList();
    }

    enqueue(val){
        this.ll.addAtTail(val);
    }

    dequeue(){
        return this.ll.removeAtHead();
    }

    front(){
        return this.ll.getHead();
    }

    isEmpty(){
        return this.ll.isEmpty();
    }
}

var MyStack = function() {
    this.primary_qu = new queue();
    this.secondary_qu = new queue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.secondary_qu.enqueue(x)

    while(!this.primary_qu.isEmpty()){
        this.secondary_qu.enqueue(this.primary_qu.front());
        this.primary_qu.dequeue();
    }

    let q = this.primary_qu;
    this.primary_qu = this.secondary_qu;
    this.secondary_qu = q;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.primary_qu.isEmpty()) return;

    return this.primary_qu.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.primary_qu.front()
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.primary_qu.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */