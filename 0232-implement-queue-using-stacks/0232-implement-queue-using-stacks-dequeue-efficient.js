var MyQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let copy = [];
    while(this.stack.length != 0){
        copy.push(this.stack.pop());  // it takes o(n) time to shift 
    }
    copy.push(x);

    while(copy.length != 0){
        this.stack.push(copy.pop());   // it takes o(n+1) time to shift again with new element
    }

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length -1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
