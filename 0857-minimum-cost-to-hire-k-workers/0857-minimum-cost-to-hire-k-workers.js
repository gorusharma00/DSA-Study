/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
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
}
class Worker{
    constructor(ratio, quality){
        this.ratio = ratio;
        this.quality = quality;
    }
}
var mincostToHireWorkers = function(quality, wage, k) {
    let workers = [];
    for(let i = 0; i < quality.length; i++){
        let ratio = wage[i] / quality[i];
        workers.push(new Worker(ratio, quality[i]));
    }

    workers.sort((a, b) => a.ratio - b.ratio);
    
    let hp = new Heap((a, b) => {
        return a.quality < b.quality
    });

    let ans = +Infinity;
    let totalQuality = 0;

    for(let i = 0; i < workers.length; i++){
        totalQuality += workers[i].quality;
        let ratio = workers[i].ratio;

        hp.insert(workers[i]);

        if(hp.size() > k){
            totalQuality -= hp.get().quality;
            hp.remove();
        }

        if(hp.size() == k){
            ans = Math.min(ans, totalQuality * ratio);
        }
        
    }

    return ans;
};