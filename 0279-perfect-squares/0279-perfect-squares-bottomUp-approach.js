/**
 * @param {number} n
 * @return {number}
 */
let dp;
let c;
var numSquares = function(n) {
    c = [];
    for(let i = 1; i<= 10000; i++){
        c.push(i * i);
    }

    return f_bu(n);
};

function f_bu(n){
    dp = new Array(10005);

    dp[0] = 0;

    for(let target = 1; target <= n; target++){
        let ans = Number.MAX_SAFE_INTEGER;

        for(let i = 0; i< c.length; i++){
            if(target >= c[i]){
                ans = Math.min(ans, dp[target - c[i]]);
            }else{
                break;
            }
        }
        if(ans == Number.MAX_SAFE_INTEGER){
            dp[target] = Number.MAX_SAFE_INTEGER;
        }else{
            dp[target] =  1 + ans;
        }
    }
    return dp[n];
}