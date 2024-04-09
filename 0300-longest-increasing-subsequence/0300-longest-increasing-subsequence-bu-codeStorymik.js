/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(2505).fill(1); // all elements are single which is subsequence of itself;
    let n = nums.length

    let maxLIS =  1; // base case

    for(let i = 0; i < n ; i++){
        for(let j = 0; j< i; j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], 1 + dp[j]); 
                maxLIS = Math.max(maxLIS, dp[i]);
            }
        }
    }

    return maxLIS;
};