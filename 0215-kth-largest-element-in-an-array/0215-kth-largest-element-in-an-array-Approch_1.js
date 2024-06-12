/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MaxHeap{
    constructor(){
        this.arr = [];
    }

    upheapify(idx){
        // idx represents the index to start upheapify from
        while(idx > 0){
            // till the time idx doesnt reach the root
            let pi = Math.floor((idx - 1)/ 2);
            
            if(this.arr[pi] < this.arr[idx]){
                // parent is smaller than current element

                // swap the parent and child
                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;

                idx = pi;
            }else{
                // everything is good, we have a heap
                break;
            }

        }
    }

    insert(data){
        // 1. Insert this data in your array
        this.arr.push(data);

        this.upheapify(this.arr.length - 1);
    }

    downheapify(idx){
        while(idx < this.arr.length){
            // 1. Calculate the lc and rc index
            let lc = 2 * idx + 1; // possible lc index
            let rc = 2 * idx + 2; // possible rc index
            let maxEl = idx; // assume root is the max

            if(lc < this.arr.length && this.arr[maxEl] < this.arr[lc]){
                // left child exist and is greater also
                maxEl = lc;
            }

            if(rc < this.arr.length && this.arr[maxEl] < this.arr[rc]){
                // right child exist && is greater also
                maxEl = rc;
            }

            // after the above comparison we klnow the biggest element
            if(idx == maxEl){
                // root is still the biggest element, dont go further
                break;
            }else{
                // swap the element of root and maxEl
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[maxEl];
                this.arr[maxEl] = temp;

                idx = maxEl;
            }
        }
    }

    remove(){
        if(this.arr.length == 0) return;
        // remove the top priority element which is root here
        // but we can not directly do it, for o(1) just swap with las el and then pop

        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        this.arr.pop();

        this.downheapify(0);
    }

    display() {
        console.log(this.arr)
    }

    get(){
        return this.arr[0];
    }
}
var findKthLargest = function(nums, k) {
    let heap = new MaxHeap();

    for(let i = 0; i < nums.length; i++){
        // insert all elements into heap
        heap.insert(nums[i]);
    }

    // now do k-1 removal to get ans as our root
    for(let i = k - 1; i > 0; i--){
        heap.remove();
    }

    return heap.get();
};

// tc => (k-1) logn  1 removal takes logn time