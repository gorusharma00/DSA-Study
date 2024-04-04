/**
 * @param {number[]} nums
 * @return {number}
 */
let dp;
let sum;
var deleteAndEarn = function(nums) {
    dp = Array(10001).fill(-1);
    sum = Array(10001).fill(0);

    for(let num of nums){
        sum[num] += num;
    }

    return f(10000);
};

function f(i){
    if(i<= 0) return 0;

    if(dp[i] !== -1) return dp[i];

    dp[i] = Math.max(f(i-1), sum[i] + f(i-2));

    return dp[i];
}