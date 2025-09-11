class Queue{
    #arr;
    constructor(){
        this.#arr = [];
    }

    enqueue(val){
        this.#arr.push(val);
    }

    dequeue(){
        return this.#arr.shift();
    }

    isEmpty(){
        return this.#arr.length == 0;
    }

    front(){
        return this.#arr[0];
    }

    size(){
        return this.#arr.length;
    }
}

