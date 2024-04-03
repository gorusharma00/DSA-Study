/**
 * @param {number[]} cost
 * @return {number}
 */

let c;
let dp;
var minCostClimbingStairs = function (cost) {
    dp = Array(1005).fill(-1);

    c = cost
    let first = f(0);
    let second = f(1);

    return Math.min(first, second);
};

function f(i) {
    if (i >= c.length) {
        return 0;
    }
    if (dp[i] != -1) return dp[i];

    let first = c[i] + f(i + 1)
    let second = c[i] + f(i + 2)

    return dp[i] = Math.min(first, second);
}