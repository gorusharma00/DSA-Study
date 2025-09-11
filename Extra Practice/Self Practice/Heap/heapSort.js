class heap{
    constructor(cmp){
        this.arr = [];
        this.cmp = cmp;
    }

    upheapify(idx){
        while(idx > 0){
            let pi = Math.floor((idx - 1)/2);

            if(this.cmp(this.arr[pi], this.arr[idx])){
                let temp = this.arr[pi];
                this.arr[pi] = this.arr[idx];
                this.arr[idx] = temp;
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

    downheapify(idx, size){
        while(idx < this.arr.length){
            let lc = 2 * idx + 1;
            let rc = 2 * idx + 2;
            let maxEl = idx;

            if(lc < size && this.cmp(this.arr[maxEl], this.arr[lc])){
                maxEl = lc;
            }

            if(rc < size && this.cmp(this.arr[maxEl], this.arr[rc])){
                maxEl = rc;
            }

            if(maxEl == idx){
                break;
            }else{
                let temp = this.arr[idx];
                this.arr[idx] = this.arr[maxEl];
                this.arr[maxEl] = temp;
            }

            idx = maxEl;
        }
    }

    remove(){
        if(this.arr.length == 0) return;

        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length -1];
        this.arr[this.arr.length - 1] = temp;

        this.arr.pop();

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

    heapSort(){
        let i = this.arr.length - 1;
        while(i >= 0){
            // swap root with last element
            let temp = this.arr[0];
            this.arr[0] = this.arr[i];
            this.arr[i] = temp;
    
            i--;
    
            this.downheapify(0, i);
        }
    }
}

function heapsort(arr){
    let hp = new heap((a, b) => a > b); // min heap

    for(let i = 0; i < arr.length; i++){
        hp.insert(arr[i]);
    }

    hp.heapSort();

    return hp.arr.reverse();
}

let x = [3,19,6,9,4,1,15,18,22,2];

console.log(heapsort(x));