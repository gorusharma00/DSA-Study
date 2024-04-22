/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
class Stack{
    #arr;

    constructor(){
        this.#arr = [];
    }

    push(val){
        this.#arr.push(val);
    }

    pop(){
        this.#arr.pop();
    }

    isEmpty(){
        return this.#arr.length == 0;
    }

    top(){
        return this.#arr[this.#arr.length -1];
    }
}

var backspaceCompare = function(s, t) {
    let s1 = new Stack();
    let s2 = new Stack();

    for(let i = 0; i < s.length; i++){
        if(!s1.isEmpty() && s[i] == "#"){
            s1.pop();
        }
        else{
            if(s[i] != "#")
            s1.push(s[i]);
        }

    }

    for(let i = 0; i < t.length; i++){
        if(!s2.isEmpty() && t[i] == "#"){
            s2.pop();
        }else{
            if(t[i] != "#")
            s2.push(t[i]);
        }

    }

    while(!s1.isEmpty() && !s2.isEmpty()){
        if(s1.top() != s2.top()){
            return false;
        }
        s1.pop();
        s2.pop();
    }

    return s1.isEmpty() && s2.isEmpty();
};