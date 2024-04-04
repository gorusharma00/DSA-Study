/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let sum = new Array(10001).fill(0);
    let dp = new Array(10001).fill(0);

    // Sum up the values for each number in nums
    for (let num of nums) {
        sum[num] += num;
    }

    dp[1] = sum[1];

    // Dynamic programming to decide whether to take or skip each number
    for (let i = 2; i < 10001; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + sum[i]);
    }

    return dp[10000];
};
