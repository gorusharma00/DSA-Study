/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let c;
var coinChange = function(coins, amount) {
    c = coins;
    let ans = f(amount);
    return (ans == Number.MAX_SAFE_INTEGER) ? -1 : ans;
};

function f(amount){
    if(amount < 0) return Number.MAX_SAFE_INTEGER;
    if(amount == 0) return 0;

    let ans = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i<c.length; i++){
        if(amount >= c[i]){
            ans = Math.min(ans, f(amount - c[i]));
        }
    }

    if(ans == Number.MAX_SAFE_INTEGER){
        return Number.MAX_SAFE_INTEGER;
    }

    return 1 + ans;
}

