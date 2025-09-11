class Stack{
    // private properties  // access modifier
    /* because i don't want anybody can access the array, because if it can 
        it also access indexing but stack does not have indexes.
    */ 
    #arr

    constructor(){
        this.#arr = [];
    }

    push(element){
        this.#arr.push(element);
    }

    pop(){
        this.#arr.pop();
    }

    top(){
        return this.#arr[this.#arr.length -1];
    }

    isEmpty(){
        return this.#arr.length == 0;
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