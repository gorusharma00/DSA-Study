class Solution {
    public static int fibo_bottom_up(int n){
        int[] dp = new int[100005];
        dp[0] = 0;
        dp[1] = 1;

        for(int i=2; i<=n ; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }

    public int fib(int n) {
        return fibo_bottom_up(n);
    }
}