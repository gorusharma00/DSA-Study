var Node = function(data){
    this.data = data
    this.next = null;
    this.prev = null;
}


class DoublyLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addAtHead(val){
        if(this.head == null){
            const newNode = new Node(val);
            this.head = newNode
            this.tail = newNode;
        }else{
            let newHead = new Node(val);
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;
        }
    }

    removeAtHead(){
        if(this.head == null){
            return;
        }else if(this.head.next == null){
            this.head = null;
            this.tail = null;
        }else{
            let nextHead = this.head.next;
            this.head.next = null;
            nextHead.prev = null;
            this.head = nextHead;
        }
    }

    addAtTail(val){
        if(this.head == null){
            this.addAtHead(val);
        }else{
            let newTail = new Node(val);
            this.tailnext = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }
        
    }

    removeAtTail(){
        if(this.head == null){
            return;
        }else if(this.head.next == null){
            this.head = null;
            this.tail = null;
        }else{
            let newTail = this.tail.prev;
            newTail.next = null;
            this.tail.prev = null;
            this.tail = newTail;
        }
    }

    display(){
        let temp = this.head;

        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }

        console.log("*********")

        temp = this.tail;
        while(temp != null){
            console.log(temp.data);
            temp = temp.prev;
        }
    }

}


const dll = new DoublyLinkedList();
dll.addAtHead(10);
dll.addAtHead(9);
dll.addAtHead(8);
dll.addAtTail(11);
dll.addAtTail(12);
// dll.removeAtHead();
dll.removeAtTail();
dll.removeAtHead();
dll.removeAtTail();
// dll.removeAtHead();
// dll.removeAtTail();
// 8 - 9 - 10 - 11 - 12
dll.display();