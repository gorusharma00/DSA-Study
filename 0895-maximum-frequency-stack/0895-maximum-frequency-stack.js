
var FreqStack = function() {
    this.freqMap = {};
    this.maxFrequency = 0;
    this.elementMap = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if(!this.freqMap[val]){
        this.freqMap[val] = 1;
        
    }else{
        this.freqMap[val] += 1;
    }

    this.maxFrequency = Math.max(this.maxFrequency,  this.freqMap[val] );
    const frequency = this.freqMap[val];
    if(!this.elementMap[frequency]){
        this.elementMap[frequency] = [val];
    }else{
        this.elementMap[frequency].push(val);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    const arr = this.elementMap[this.maxFrequency]
    let result = arr[arr.length -1];
    this.elementMap[this.maxFrequency].pop();  /*i can also directly pop it and store it in result 
                                                but some stack in other lang. does not support to return that element 
                                                when pop function is run */
    this.freqMap[result]--;
    
    if(this.elementMap[this.maxFrequency].length == 0){
        delete this.elementMap[this.maxFrequency];

        this.maxFrequency -= 1;
    }

    return result;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */