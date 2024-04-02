/**
 * @param {number} n
 * @return {number}
 */
let dp;
var climbStairs = function(n) {
    return f_bu(n);
};

function f_bu(n){
    dp = new Array(50);
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i<= n; i++){
        dp[i] = dp[i - 1] + dp[i -2];
    }

    return dp[n]
}