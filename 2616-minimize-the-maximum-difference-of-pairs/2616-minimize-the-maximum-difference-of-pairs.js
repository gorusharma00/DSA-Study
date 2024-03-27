/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a,b) => a -b);
    let lo = 0;
    let hi = nums[nums.length -1] - nums[0];
    let ans = hi;
    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(canForm_leastPair_withAtMost_diff(nums, mid, p)){
            ans = mid
            hi = mid -1;
        }else{
            lo = mid+1;
        }
    }
    return ans;
};

function canForm_leastPair_withAtMost_diff(nums, mid, p){
    let count = 0;
    let i =0;
    while(i< nums.length -1){  // no need to take last element
        if(nums[i+1] - nums[i] <= mid){
            count++;
            i += 2;
        }else{
            i++;
        }
    }
    return count >= p;
}