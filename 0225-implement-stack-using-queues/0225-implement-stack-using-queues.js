class customQueue{
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
var MyStack = function() {
    this.qu1 = new customQueue();
    this.qu2 = new customQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.qu1.enqueue(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size = this.qu1.size();
    let i = 0
    while(i <= size - 2){
        this.qu2.enqueue(this.qu1.dequeue());
        i++;
    }

    let popElement = this.qu1.dequeue();

    let q = this.qu1;
    this.qu1 = this.qu2;
    this.qu2 = q;

    return popElement;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let size = this.qu1.size();
    let i = 0
    let lastElement;
    while(i < size){
        lastElement = this.qu1.dequeue();
        this.qu2.enqueue(lastElement);
        i++;
    }

    let q = this.qu1;
    this.qu1 = this.qu2;
    this.qu2 = q;

    return lastElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.qu1.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */