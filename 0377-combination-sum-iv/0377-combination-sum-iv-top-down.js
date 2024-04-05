/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let n;
let dp;
var combinationSum4 = function(nums, target) {
    dp = Array(1005).fill(-1);
    n = nums;
    return f(target)
};

function f(target){

    if(target == 0) return 1;

    if(dp[target] != -1) return dp[target];
    
    let ans = 0;

    for(let i = 0; i< n.length; i++){
        if(target - n[i] >= 0){
            ans += f(target - n[i]);
        }
    }

    return dp[target] = ans;
}
/* 
time complexity => O(n * target) because n is size of given array we are iterating over, 
in each subproblem, which will equal to target + 1
*/
