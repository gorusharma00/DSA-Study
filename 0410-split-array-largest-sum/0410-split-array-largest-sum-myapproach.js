/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let totalSum = 0;
    let Max_el = -1

    for(let i=0; i<nums.length; i++){
        totalSum += nums[i];
        Max_el = Math.max(Max_el, nums[i])
    }

    let lo = Max_el
    let hi = totalSum;
    let ans = hi;

    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(maxSum_in_k(nums, mid, k)){
            ans = mid;
            hi = mid -1;
        }else{
            lo = mid+1
        }
    }
    return ans;
};

function maxSum_in_k(nums, mid, k){
    let split = 0;
    let sum_el= 0

    for(let i=0; i<nums.length; i++){
        if(sum_el + nums[i] > mid){
            split++;
            sum_el = 0
        }
        sum_el += nums[i]
    }
    split++;
    return split <= k;
}