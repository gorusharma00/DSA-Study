class Node{
    int data;
    Node next;

    public Node(int data){
        this.data = data;
        this.next = null;
    }

}

class MyLinkedList {
    Node head;

    public MyLinkedList() {
        this.head = null;
    }
    
    public int get(int index) {
        int i = 0;
        Node temp = this.head;

        while( i < index && temp != null){
            i++;
            temp = temp.next;
        }

        if(temp == null) return -1;

        return temp.data;
    }
    
    public void addAtHead(int val) {
        if(this.head == null){
            Node head = new Node(val);
        }

        Node newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
    }
    
    public void addAtTail(int val) {
        if(this.head == null){
            this.head = new Node(val);
            return;
        }else{
            Node temp = this.head;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = new Node(val);
        }

    }
    
    public void addAtIndex(int index, int val) {
        if(this.head == null && index != 0) return;
        if(index == 0){
            addAtHead(val);
            return;
        }

        Node prev = null;
        Node curr = this.head;
        int i = 0;
        while( i < index && curr != null){
            prev = curr;
            curr = curr.next;
            i++;
        }
        if(i != index) return; // if index is greater than the length;

        Node n = new Node(val);

        prev.next = n;
        n.next =  curr;
    }
    
    public void deleteAtIndex(int index) {
        if(this.head == null) return;

        if(index == 0){
            Node delHead = this.head;
            this.head = delHead.next;
            delHead.next = null;
            return;
        }

        Node prev = null;
        Node nodeTobeDel = this.head;
        int i = 0;
        while(i < index && nodeTobeDel != null){
            prev = nodeTobeDel;
            nodeTobeDel = nodeTobeDel.next;
            i++;
        }

        if(i != index) return;
        if(nodeTobeDel == null) return;
        
        prev.next = nodeTobeDel.next;
        nodeTobeDel.next = null;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */