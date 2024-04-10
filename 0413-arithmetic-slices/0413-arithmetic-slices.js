/**
 * @param {number[]} nums
 * @return {number}
 */
 let arr;
var numberOfArithmeticSlices = function(nums) {
    arr = nums;
    return f_bu()
};

function f_bu(){
    let dp = new Array(5005);
    for(let i = 0; i< arr.length; i++){
        if(i == 0 || i ==1) dp[i] = 0;
        else{
            if(arr[i] - arr[i-1] != arr[i-1] - arr[i-2]){
                dp[i] = 0;
            }else{
                dp[i] = 1 + dp[i-1];
            }
        }
    }
    let ans = 0;
    for(let i = 0; i< arr.length; i++){
        ans+= dp[i];
    }
    return ans;
}