/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 let dp;
 let c;
var coinChange = function(coins, amount) {
    c = coins;
    let ans = bottom_up_f(amount);
    return (ans == Number.MAX_SAFE_INTEGER) ? -1 : ans;
};

function bottom_up_f(value){

    dp = new Array(10005);
    dp[0] = 0;

    for(let amount = 1; amount <= value; amount++){
        let ans = Number.MAX_SAFE_INTEGER;
        let n = c.length

        for(let i = 0; i<n; i++){
            if(amount >= c[i]){
                ans = Math.min(ans, dp[amount - c[i]]);
            }
        }

        if(ans == Number.MAX_SAFE_INTEGER){
            dp[amount] = Number.MAX_SAFE_INTEGER;
        }else{
            dp[amount] =  1 + ans;
        }
        
    }
    return dp[value];
}