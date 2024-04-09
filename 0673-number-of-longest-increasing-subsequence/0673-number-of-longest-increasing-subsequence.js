/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let n = nums.length;

    let dp = new Array(n).fill(1);
    let count = new Array(n).fill(1);

    for(let i = 0; i < n; i++){
        for(let j = 0; j< i; j++){
            if(nums[j] < nums[i]){
                if(dp[j] + 1 == dp[i]){
                    count[i] += count[j]
                }else if(dp[j] + 1 > dp[i] ){
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                }
            }
        }
    }

    let maxVal = Math.max(...dp);
    let result = 0
    for(let i = 0; i < count.length; i++){
        if(dp[i] == maxVal){
            result += count[i];
        }
    }

    return result;
};