var Node = function(data){
    this.data = data;
    this.next = null;
}

class LinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
    }

    deleteAtHead(){
        if(this.head == null) return;
        let newHead = this.head.next;
        this.head.next = null;
        this.head = newHead;

        // if head becomes null after removal of the node means ll is empty now
        if(this.head == null){
            this.tail = null;
        }
    }

    addAtTail(val){
        if(this.head == null){
            let newTail = new Node(val);
            this.head = newTail;
            this.tail = newTail;
            return;
        }else{
            let nextTail = new Node(val);
            this.tail.next = nextTail;
            this.tail = nextTail;
        }

    }

}

var queue = function(){
    this.linkedList = new LinkedList();

    this.enqueue = function(val) {
        this.linkedList.addAtTail(val);
    }

    this.dequeue = function(){
        this.linkedList.deleteAtHead();
    }

    this.front = function(){
        return this.linkedList.head.data;
    }

    this.back = function(){
        return this.linkedList.tail.data;
    }

    this.isEmpty = function(){
        return this.linkedList.head == null;
    }
}

let s = new queue();

s.enqueue(5);
s.enqueue(10);
s.enqueue(15);
s.enqueue(20);


console.log(s.front());
console.log(s.back());

s.dequeue()
s.dequeue()
s.dequeue()

console.log(s.front());

s.dequeue();

console.log(s.isEmpty());

