/**
 * @param {number[]} nums
 * @return {number}
 */
let arr;
let dp;
var numberOfArithmeticSlices = function(nums) {
    arr = nums;

    return f_bu();
};

function f_bu(){
    let n = arr.length;
    dp = new Array(n);
    for(let i = 0; i<n; i++){
        dp[i] = {};
    }

    let ans = 0;
    for(let i = 1; i< n; i++){
        for(let j = 0; j<i; j++){
            let diff = arr[i] - arr[j];

            if(dp[j][diff]){
                ans += dp[j][diff];
                if(dp[i][diff]){
                    dp[i][diff] += 1 + dp[j][diff];
                }else{
                    dp[i][diff] = 1 + dp[j][diff];
                }
            }else{
                if(dp[i][diff]){
                    dp[i][diff] += 1;
                }else{
                    dp[i][diff] = 1;
                }
            }
        }
    }
    return ans;
}