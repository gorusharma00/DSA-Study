/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lo = 0;
    let hi = nums.length -1;

    if(hi<1) return nums[0];

    if(nums[lo]< nums[hi]) return nums[0];

    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]){
            return nums[mid];
        }

        if(nums[mid] > nums[hi]){
            lo = mid+1;
        }else{
            hi = mid-1
        }

    }
    return nums[lo];
};