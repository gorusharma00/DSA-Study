class Solution {
    public static int[] dp;
    public static int[] c;

    public static int f(int n){
        if(n<0) return Integer.MAX_VALUE;
        if(n == 0) return 0;

        if(dp[n] != -1) return dp[n];

        int ans = Integer.MAX_VALUE;

        for(int i = 0; i < c.length ; i++){
            if(n >= c[i]){
                ans = Math.min(ans, f(n - c[i]));
            }
        }

        if(ans == Integer.MAX_VALUE){
            return dp[n] = Integer.MAX_VALUE;
        }

        return dp[n] = 1 + ans;
    }

    public int numSquares(int n) {
        c = new int[100];
        int j =0;

        for(int i =1; i * i <= 10000; i++){
            c[j] = i * i;
            j++;
        }

        dp = new int[10005];
        Arrays.fill(dp, -1);

        int ans = f(n);
        return ans;
    }
}