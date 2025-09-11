var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // until or unless we attach this new node to a list, the next property should be null
}

var MyLinkedList = function() {
    this.head = null; // because initially everything is empty
};


MyLinkedList.prototype.addAtHead = function(key, val) {
    if(this.head == null) {
        // means the ll is empty, so this node should become the head
        this.head = new Node(key, val);
    } else {
        // when ll is not. empty
        let n = new Node(key, val);
        n.next = this.head;
        this.head = n;
    }
};


MyLinkedList.prototype.deleteAtHead = function() {
    if(this.head == null) return;
    let nextHead = this.head.next;
    let nodeToBeDelete = this.head; // curr head
    this.head = nextHead;
    nodeToBeDelete.next = null; // prev head disconnected
}


class HashMap{
    constructor(){
        this.lambdaFactorThreshold = 0.5;
        this.lambdaFactorLowerThresold = 0.25;
        this.maxSize = 2;
        this.arr = Array(this.maxSize);
        for(let i = 0; i < this.maxSize; i++){
            this.arr[i] = new MyLinkedList();
        }

        this.currSize = 0;
    }

    hashFunction(key){
      let ans = 0;
      let p = 101;
      let pow = 1;
      let C = this.maxSize;
      for(let i = 0; i < key.length; i++){
        let asciiValue = this.ascii(key, i);
        ans = ((ans)%C + ((asciiValue)%C * (pow)%C) %C ) % C; 

        pow = ((pow)%C * (p)%C) % C;
      }

      return ans;
    }

    ascii(key, index){
        return key.charCodeAt(index);
    }

    display(){
        for(let i = 0; i < this.arr.length; i++){
            let temp = this.arr[i].head;
            let str = "LL: ";
            while(temp != null){
                str += '(' + temp.key + ',' + temp.value + ") -> ";
                temp = temp.next;
            }
            console.log(str);
        }

        console.log(this.currSize, this.maxSize);
        console.log('#######');
    }

    update(key, value){
        const bucketIndex = this.hashFunction(key);
        let temp = this.arr[bucketIndex].head;
        while(temp != null){
            if(temp.key == key){
                temp.value = value;
                return;
            }
            temp = temp.next;
        }
    }

    insert(key, value){
        // update part later

        if(this.search(key)){
            this.update(key, value);
            return;
        }

        const newLoadFactor = (this.currSize + 1) / this.maxSize;
        if(newLoadFactor > this.lambdaFactorThreshold){
            this.rehash();
        } 

        const bucketIndex = this.hashFunction(key);

        this.arr[bucketIndex].addAtHead(key, value);

        this.currSize += 1;
    }

    remove(key){
        if(!this.search(key)){
            console.log("Key is not present");
            return;
        }

        const bucketIndex = this.hashFunction(key);
        let temp = this.arr[bucketIndex].head;

        if(temp.key === key){
            this.arr[bucketIndex].deleteAtHead();
            this.currSize -= 1;
            const loadFactor = (this.currSize) / this.maxSize;
            if(loadFactor <= this.lambdaFactorLowerThresold) {
                this.rehash(0.5);
            }
            return;
        }

        let prev = null;
        while(temp != null){
            if(temp.key == key){
                let nextNode = temp.next;
                prev.next = nextNode;
                temp.next = null;
                this.currSize -= 1;
                const loadFactor = (this.currSize) / this.maxSize;
                if(loadFactor <= this.lambdaFactorLowerThresold) {
                    this.rehash(0.5);
                }
                return;
            }
            prev = temp;
            temp = temp.next;
        }
        
    }

    search(key){
        const bucketIndex = this.hashFunction(key);
        let temp = this.arr[bucketIndex].head;
        while(temp != null){
            if(temp.key == key){
                return true;
            }
            temp = temp.next;
        }

        return false;
    }

    rehash(factor = 2){
        this.maxSize *= factor;

        let newArr = Array(this.maxSize);
        for(let i = 0; i < this.maxSize; i++) {
            newArr[i] = new MyLinkedList();
        }

        let oldArr = this.arr;

        for(let i = 0; i < oldArr.length; i++){
            let temp = oldArr[i].head;

            while(temp != null){
                let key = temp.key;
                let value = temp.value;

                const bucketIndex = this.hashFunction(key);
                newArr[bucketIndex].addAtHead(key, value);

                temp = temp.next;
            }
        }

        this.arr = newArr;
    }
}

const hm = new HashMap();

hm.insert("mango", 10);
hm.display();
hm.insert("banana", 3);
hm.display();
hm.insert("apple", 4);
hm.display();
hm.insert("grapes", 14);
hm.display();
hm.insert("apple", 50);
hm.display();
hm.remove("apple")
hm.display()