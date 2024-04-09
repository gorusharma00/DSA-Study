/**
 * @param {number[]} nums
 * @return {number}
 */
let dp = new Array(2505);
let arr;

var lengthOfLIS = function(nums) {
    arr = nums;
    return f_bu();
};

function f_bu(){

    for(let i = 0; i< arr.length; i++){
        if(i == 0) dp[i] = 1;
        else{
            let result = 1; 

            for(let j = 0; j <= i-1; j++ ){
                if(arr[j] < arr[i]){
                    result = Math.max(result, 1 + dp[j]);
                }
            }
            dp[i] = result;
        }
    }

    let ans = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i<arr.length; i++){
        ans = Math.max(ans, dp[i])
    }

    return ans;
    
}
