class Solution {
    public static int[] arr;
    public static int[] dp = new int[2505];

    public static int f_bu(){

        for(int i = 0; i< arr.length; i++){
            if(i == 0) dp[i] = 1;
            else{
                int result = 1;
                for(int j = 0; j <= i -1; j++){
                    if(arr[j] < arr[i]){
                        result = Math.max(result, 1 + dp[j]);
                    }
                }
                dp[i] = result;
            }
        }

        // final ans
        int ans = Integer.MIN_VALUE;
        for(int i = 0; i < arr.length; i++){
            ans = Math.max(ans, dp[i]);
        }
        return ans;
    }

    public int lengthOfLIS(int[] nums) {
        arr = nums;
        return f_bu();
    }
}