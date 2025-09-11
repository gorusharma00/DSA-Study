var Node = function(data){
    this.data = data;
    this.next = null;
}

var MyLinkedList = function(){
    this.head = null;
}

MyLinkedList.prototype.addAtHead = function(val){
    if(this.head == null){
        this.head = new Node(val);
    }else{
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
};

MyLinkedList.prototype.deleteAtHead = function(){
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDelete = this.head;
    this.head = nextHead;
    nodeToBeDelete.next = null;
};

class Stack{
    // private linked list
    #ll;

    constructor(){
        this.#ll = new MyLinkedList();
    }

    push(element){
        this.#ll.addAtHead(element);
    }

    pop(){
        this.#ll.deleteAtHead();
    }

    top(){
        return this.#ll.head.data;
    }

    isEmpty(){
        return this.#ll.head == null;
    }

}

let s = new Stack();

s.push(40);
s.push(20);
s.pop();

console.log(s.top());

console.log(s.isEmpty());

s.pop();

console.log(s.isEmpty());