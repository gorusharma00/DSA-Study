class Solution {
    // it is brute force approach 
    public static int[] c; // global coins array
    public static int[] dp;

    public static int f(int amount){
        if(amount < 0) return Integer.MAX_VALUE;    //if amount < 0 then its not possible
        if(amount == 0) return 0;    // if amount = 0, then give nothing;

        if(dp[amount] != -1) return dp[amount];
        int n = c.length;
        int ans = Integer.MAX_VALUE;


        for(int i =0; i< n; i++){  // i -> [0, n-1]
            if(amount >= c[i]){
                ans = Math.min(ans, f(amount - c[i]));
            }
        }

        // if ans is still max integer then this amount is not possible
        if(ans == Integer.MAX_VALUE){
            return dp[amount] = Integer.MAX_VALUE;
        }

        return dp[amount] = 1 + ans;
    }

    public int coinChange(int[] coins, int amount) {
        dp = new int[10005];
        Arrays.fill(dp, -1);
        c = coins;
        int ans = f(amount);
        return (ans == Integer.MAX_VALUE) ? -1 : ans;
    }
}