/**
 * @param {string} path
 * @return {string}
 */
class Stack {
    // private properties
    #arr;

    constructor() {
        this.#arr = [];
    }

    push(element) {
        this.#arr.push(element);
    }

    pop() {
        this.#arr.pop();
    }

    top() {
        return this.#arr[this.#arr.length - 1]; // element present at the last index is the top most element
    }

    isEmpty() {
        return this.#arr.length == 0;
    }
}

var simplifyPath = function(path) {
    let s = new Stack();

    const parts = path.split('/')

    for(const part of parts){
        if(part === '..'){
            if(!s.isEmpty()){
                s.pop();
            }
        }else if(part !== '' && part  !== '.'){
            s.push(part);
        }
    }

    let newPath = "";
    if(s.isEmpty()){
        newPath = '/';
    }else{
        while(!s.isEmpty()){
            newPath =  "/" + s.top() + newPath;
            s.pop();
        }
    }

    return newPath;
};