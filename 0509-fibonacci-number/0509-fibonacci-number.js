/**
 * @param {number} n
 * @return {number}
 */
let dp;

var fib = function(n) {
    dp = new Array(100005).fill(-1);
    return fibo(n);
};

function fibo(n){
    if(n == 0 || n == 1 ) return n;
    if(dp[n] != -1) return dp[n];
    return dp[n] = fibo(n-1) + fibo(n-2);
}