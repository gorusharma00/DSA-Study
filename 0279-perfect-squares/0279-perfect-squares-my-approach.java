class Solution {
    public static int[] dp;

    public static int f(int n){
        if(n < 0) return Integer.MAX_VALUE;   
        if(n == 0) return 0;

        if(dp[n] != -1) return dp[n];

        int ans = Integer.MAX_VALUE;

        for(int i = 1; i*i <= n ; i++){
            int square = i * i;
            if(n - square <= n){
                ans = Math.min(ans, f(n - square ));
            }
        }

        if( ans == Integer.MAX_VALUE){
            return dp[n] = Integer.MAX_VALUE;
        }

        return  dp[n] = 1 + ans;
    }

    public int numSquares(int n) {
        dp = new int[10005];
        Arrays.fill(dp, -1);
        int ans = f(n);
        return (ans == Integer.MAX_VALUE)? -1 : ans;
    }
}