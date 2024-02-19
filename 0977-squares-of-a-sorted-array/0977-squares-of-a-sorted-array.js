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

    let n = nums.length
    let result = new Array();
    for(let i=0; i<n; i++){
        result.push(nums[i] **2);
    }
    result.sort((x,y) => x-y);
    return result;
};