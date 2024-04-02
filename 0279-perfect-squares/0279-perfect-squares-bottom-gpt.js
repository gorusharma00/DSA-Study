/**
 * @param {number} n
 * @return {number}
 */

let dp;

var numSquares = function(n) {
    return f(n)
};

function f(n){
    dp = new Array(10005).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for(let target = 1; target<= n ; target++){
        for(let s = 1; s * s <= target; s++){
            let sqr = s * s;
            dp[target] = Math.min(dp[target], 1 + dp[target - sqr]);
        }
    }
    return dp[n];
}