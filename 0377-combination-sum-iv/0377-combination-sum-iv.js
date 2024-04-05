/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let dp;
let arr;
var combinationSum4 = function(nums, target) {
    arr = nums;
    return f_bu(target)
};

function f_bu(given_target){
    dp = Array(1005);
    
    for(let target = 0; target<= given_target; target++){
        if(target == 0) dp[target] = 1;
        else{
            let n = arr.length
            let result = 0;

            for(let k = 0; k <= n; k++){
                if(target - arr[k] >= 0){
                    result += dp[target - arr[k]];
                }
            }
            dp[target] = result;
        }
    }
    return dp[given_target]
}