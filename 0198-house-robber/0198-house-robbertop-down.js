/**
 * @param {number[]} nums
 * @return {number}
 */
let dp;
let n;
var rob = function(nums) {
    dp = Array(105).fill(-1);
    n = nums;
    return f(0);
};

function f(i){
    if(i >= n.length) return 0;

    if(dp[i] != -1) return dp[i];

    return dp[i] = Math.max(n[i] + f(i+2), f(i+1));
}