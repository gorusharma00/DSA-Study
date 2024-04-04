/**
 * @param {number} n
 * @return {number}
 */
let dp;
var tribonacci = function(n) {
    dp = Array(40).fill(-1);
    return f(n);
};

function f(n){
    let ans;
    if(n == 0) return 0;
    if(n== 1 || n== 2 ) return 1;
    if(dp[n] != -1) return dp[n]

    if(n >= 3){
      ans = f(n-1) + f(n-2) + f(n-3);
    }

    return dp[n] = ans;
}