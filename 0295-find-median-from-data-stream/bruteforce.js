
var MedianFinder = function() {
    this.arr = [];
    this.i = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.i == 0){
        this.arr.push(num);
        this.i++;
        return;
    }

    let j = this.i - 1;

    while(j >= 0 && this.arr[j] > num){
        this.arr[j+1] = this.arr[j];
        j--;
    }
    this.arr[j+1] = num;
    this.i++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let n = this.i;
    console.log(this.arr);
    if(n % 2 == 0){
        const l = Math.floor(n / 2) - 1;
        const r = Math.floor(n / 2);
        return (this.arr[l] + this.arr[r]) / 2;
    }else{
        return this.arr[Math.floor(n/2)];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */