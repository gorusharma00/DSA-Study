/**
 * @param {number[]} nums
 * @return {number}
 */
let dp = new Array(2505);
let arr;

var lengthOfLIS = function(nums) {
    arr = nums;
    dp.fill(-1);

    let ans = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i<nums.length; i++){
        ans = Math.max(ans, f(i))
    }

    return ans;
};

function f(i){
    if(i == 0) return 1;
    if(dp[i] != -1) return dp[i];

    let result = 1;      // minimum value of longest increasing subsequence
    for(let j = 0; j <= i-1; j++ ){
        if(arr[j] < arr[i]){
             result = Math.max(result, 1 + f(j))
        }
    }
    return dp[i] = result;
}