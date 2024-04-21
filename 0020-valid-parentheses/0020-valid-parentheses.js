/**
 * @param {string} s
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

    top(){
        return this.#arr[this.#arr.length -1];
    }

    isEmpty(){
        return this.#arr.length == 0;
    }
}

var isValid = function(s) {
    let st = new Stack();

    for(let i = 0; i < s.length; i++){
        if(st.top() == '(' && s[i] == ')' || st.top() == '[' && s[i] == ']' || st.top() == '{' && s[i] == '}'){
            st.pop();
        }else{
            st.push(s[i]);
        }
    }

    return st.isEmpty();
};