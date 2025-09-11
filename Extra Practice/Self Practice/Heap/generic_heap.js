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

    downheapify(idx){
        while(idx < this.arr.length){
            let lc = 2 * idx + 1;
            let rc = 2 * idx + 2;
            let maxEl = idx;

            if(lc < this.arr.length && this.cmp(this.arr[maxEl], this.arr[lc])){
                maxEl = lc;
            }

            if(rc < this.arr.length && this.cmp(this.arr[maxEl], this.arr[rc])){
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

    isEmpty(){
        return this.arr.length == 0;
    }
}

let hp = new heap((a, b) => {
    return a > b  // a< b for max heap, a > b for min heap
});

hp.insert(9);
hp.insert(19);
hp.insert(2);
hp.insert(39);
hp.insert(29);
hp.insert(12);
hp.insert(-9);
hp.insert(6);
hp.display();

/*
     -9
  6       2
19  29  12  9
39
*/ 