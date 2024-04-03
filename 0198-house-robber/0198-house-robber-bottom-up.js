/**
 * @param {number[]} nums
 * @return {number}
 */
let dp;
var rob = function(nums) {
    return f(nums);
};

function f(nums){
    dp = Array(105);
    let n = nums.length;

    if(n == 1) return nums[n-1];

    dp[n-1] = nums[n-1];
    dp[n-2] = Math.max(nums[n-1], nums[n-2]);

    for(i = n-3 ; i>=0; i--){
        dp[i] = Math.max(nums[i] + dp[i+2], dp[i+1]); 
    }

    return dp[0];
}