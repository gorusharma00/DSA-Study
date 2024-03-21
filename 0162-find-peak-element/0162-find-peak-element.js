/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length ==1) return 0;

    let lo = 0;
    let hi = nums.length -1;

    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(mid == 0 && nums[mid] > nums[mid+1]){
            return mid;
        }
        
        if(nums[mid] > nums[mid-1] && mid == nums.length-1){
            return mid;
        }

        if(nums[mid]> nums[mid+1] && nums[mid] > nums[mid-1]){
            return mid;
        }
        
        if(nums[mid] < nums[mid+1]){
            lo = mid+1;
        }else{
            hi = mid-1;
        }
    }
    return -1;
};