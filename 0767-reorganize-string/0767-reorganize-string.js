/**
 * @param {string} s
 * @return {string}
 */
class Heap {
    constructor(cmp) {
        this.arr = [];
        this.cmp = cmp;
    }

    upheapify(idx) {
        // idx represents the index to start upheapify from
        while(idx > 0) {
            // till the time idx doesnt reach the root
            let pi = Math.floor((idx-1)/2);
            if(this.cmp(this.arr[pi] , this.arr[idx])) {
                // parent is smaller than current element

                // swap the parent and child
                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;


                idx = pi;
            } else {
                // everything is good, we have a heap
                break;
            }
        }
    }

    insert(data) {
        // 1. Insert this data in your array
        this.arr.push(data);

        // 2. upheapify
        this.upheapify(this.arr.length - 1);
    }

    downheapify(idx) {
        while(idx < this.arr.length) {
            // 1. Calculate the lc and rc index
            let lc = 2*idx + 1; // possible lc index
            let rc = 2*idx + 2; // possible rc index
            let maxEl = idx; // assume root is the max
            if(lc < this.arr.length && this.cmp(this.arr[maxEl] , this.arr[lc])) {
                // left child exist and is greater also
                maxEl = lc;
            }

            if(rc < this.arr.length && this.cmp(this.arr[maxEl] , this.arr[rc])) {
                // right child exist && is greater also
                maxEl = rc;
            }

            // after the above comparison we klnow the biggest element
            if(idx == maxEl) {
                // root is still the biggest element, dont go further
                break;
            } else {
                // swap the element of root and maxEl
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[maxEl];
                this.arr[maxEl] = temp;

                idx = maxEl;
            }
        }
 


    }

    remove() {
        if(this.arr.length == 0) return;
        // remove the highest priority element

        // 1. swap the root with last element

        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        // 2. Remove the last element
        this.arr.pop();

        // 3. downheapify
        this.downheapify(0);

    }

    display() {
        console.log(this.arr)
    }

    get() {
        return this.arr[0]; // return the root
    }

    size(){
        return this.arr.length;
    }

    isEmpty(){
        return this.arr.length == 0;
    }
}

class freqMap{
    constructor(char, freq){
        this.char = char;
        this.freq = freq;
    }
}

var reorganizeString = function(s) {
    let map = {};  // for storing occurences of char
    for(let i = 0; i < s.length; i++){
        let ch = s[i];
        if(map[ch]){
            map[ch] += 1;
        }else{
            map[ch] = 1
        }

        if(map[ch] > (s.length + 1) / 2){
            return "";
        }
    }

    let hp = new Heap((a, b) => {
        return a.freq < b.freq ;       // create max heap acc to their freq
    })

    for(let i in map){
        hp.insert(new freqMap(i, map[i]));  // and make obj of char and freq and push into heap
    }

    let result = "";  // result string

    while(hp.size() >= 2){
        // as we maintaining the size of heap 2 we can remove 2 el directly

        let first = hp.get();   
        hp.remove();
        let second = hp.get();
        hp.remove();

        result += first.char;
        result += second.char;
        
        // dec. their freq
        first.freq--;
        second.freq--;

        // again insert into heap if their freq is > 0
        if(first.freq > 0){
            hp.insert(first);
        }

        if(second.freq > 0){
            hp.insert(second);
        }
    }

    if(!hp.isEmpty()){
        result += hp.get().char;  // when heap of size is 1 we can check if heap not empty
    }

    return result;
};