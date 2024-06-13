function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

class Maxheap{
    constructor(arr){
        this.arr = arr;
        this.limit = this.arr.length - 1;
        for(let i = Math.floor(this.arr.length/2); i < this.arr.length; i++){
            this.upheapify(i) // this will convert given array into max Heap
        }
    }

    upheapify(idx){
        while(idx > 0){
            let pi = Math.floor((idx - 1)/ 2);
            if(this.arr[pi] < this.arr[idx]){
                swap(this.arr, pi, idx);
                idx = pi;
            }else{
                break;
            }

        }
    }

    insert(data){
        this.arr.push(data);

        this.upheapify(this.arr.length - 1);
    }

    downheapify(idx){
        while(idx < this.arr.length){
            let lc = 2 * idx + 1;
            let rc = 2 * idx + 2;
            let maxEl = idx;

            if(lc <= this.limit && this.arr[lc] > this.arr[maxEl]){
               maxEl = lc
            }

            if(rc <= this.limit && this.arr[rc] > this.arr[maxEl]){
                maxEl = rc;
            }

            if(maxEl == idx){
                break;
            }else{
                swap(this.arr, idx, maxEl);
                idx = maxEl;
            }
        }
    }

    remove(){
        swap(this.arr, 0, this.arr.length - 1);
        this.arr.pop();

        this.downheapify(0);
    }

    get() {
        /**
         * Time: O(1)
         * Space: O(1)
         */
        if(this.arr.length == 0) {
            console.log("heap is empty");
            return;
        }
        return this.arr[0];
    }

    display() {
        console.log(this.arr);
    }

    heapSort(){
        let i = this.limit;

        while(i >= 0){
            swap(this.arr, 0, i);

            i--;
            this.limit -= 1;
            this.downheapify(0);
        }
    }
}

let x = [3,19,1,15,18,22,2];
let y = [ 10,9,8,7,6,5,4,3,2];

let hp1 = new Maxheap(x);
let hp2 = new Maxheap(y);

hp1.heapSort();
hp2.heapSort();

hp1.display();
hp2.display();

