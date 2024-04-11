class Solution {
    public static int[] arr;

    public static int f_bu(){
        int[] dp = new int[5005];
        int ans = 0;
        for(int i = 0; i<arr.length; i++){
            if(i == 0 || i == 1) dp[i] = 0;
            else{
                if(arr[i] - arr[i-1] != arr[i-1] - arr[i-2]){
                    dp[i] = 0;
                }else{
                    dp[i] = 1 + dp[i-1];
                }
            }
        }

        for(int i = 0; i<arr.length; i++){
            ans+= dp[i];
        }

        return ans;
    }

    public int numberOfArithmeticSlices(int[] nums) {
        arr = nums;
        return f_bu();
    }
}