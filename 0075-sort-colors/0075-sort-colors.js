/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n = nums.length;
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            let temp =0;
            if(nums[i]>nums[j]){
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp;
            }
        }
    }
};