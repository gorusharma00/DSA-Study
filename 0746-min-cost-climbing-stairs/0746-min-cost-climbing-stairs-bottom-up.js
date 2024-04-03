/**
 * @param {number[]} cost
 * @return {number}
 */
let dp;
var minCostClimbingStairs = function(cost) {
    return f_bu(cost);

};


function f_bu(cost){
    let n = cost.length
    dp = Array(1005);
    
    for(let i = 0; i< n; i++){
        if(i<2) dp[i] = cost[i];
        else{
            dp[i] = cost[i] + Math.min(dp[i-1], dp[i -2]);
        }
    }
    return Math.min(dp[n-1], dp[n-2]);      // The answer is the minimum cost to reach the top of the floor
                                              // which can be either from the last step or the second to last step

}