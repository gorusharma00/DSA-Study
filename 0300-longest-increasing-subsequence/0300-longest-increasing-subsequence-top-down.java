class Solution {
    public static int[] arr;
    public static int[] dp = new int[2505];

    public static int f(int i){
        if(i == 0) return 1;
        if(dp[i] != -1) return dp[i];
        int result = 1;
        for(int j = 0; j <= i -1; j++){
            if(arr[j] < arr[i]){
                result = Math.max(result, 1 + f(j));
            }
        }
        return dp[i] = result;
    }

    public int lengthOfLIS(int[] nums) {
        arr = nums;
        Arrays.fill(dp, -1);
        int ans = Integer.MIN_VALUE;
        for(int i = 0; i < nums.length; i++){
            ans = Math.max(ans, f(i));
        }

        return ans;
    }
}