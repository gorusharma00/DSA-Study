/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    /* takes more instructions then sort function
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i] * nums[i]
    }
    
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length; j++){
            if(nums[i]> nums[j]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
    */

    /* brute force way
    let n = nums.length
    for(let i=0; i<n; i++){
        nums[i] = nums[i] **2;
    }
    nums.sort((x,y) => x-y);
    return nums;
    */

    // optimized way

    let n = nums.length;
    let result = new Array(n)
    let left = 0;
    let right = n-1;
    for(let i=n-1; i>=0; i--){
        if(nums[left] **2 < nums[right] **2){
            result[i] = nums[right] **2;
            right--;
        }else{
            result[i] = nums[left] **2;
            left++
        }
    }
    return result;

};