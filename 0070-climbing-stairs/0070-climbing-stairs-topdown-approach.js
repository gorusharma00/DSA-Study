/**
 * @param {number} n
 * @return {number}
 */
let dp;
var climbStairs = function(n) {
    dp = new Array(50).fill(-1);
    return f(n);
};

function f(n){
    if( n< 0) return 0;
    if(n == 0 || n == 1){
        return 1;
    }

    if(dp[n] != -1) return dp[n]

    return dp[n] = f(n-1) + f(n-2);
}

//time complexity => O(n)