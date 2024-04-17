class Solution {
    public static int[] p;
    public static int[][][] dp = new int[100005][3][2];

    public static int f(int i, int k, int on){
        //base case
        if(i == p.length) return 0; 

        if(dp[i][k][on] != -1) return dp[i][k][on];

        int ans = Integer.MIN_VALUE;

        //ignore case
        ans = Math.max(ans, f(i+1, k, on));

        //buy
        if( k > 0 && on == 0){
            ans = Math.max(ans, -p[i] + f(i+1, k, 1));
        }

        // sell
        if(on == 1){
            ans = Math.max(ans, p[i] + f(i+1, k-1, 0));
        }

         return dp[i][k][on] = ans;
    }

    public int maxProfit(int[] prices) {
        p = prices;
        int K = 2;

        for(int i = 0; i < 100005; i++){
            for(int j = 0; j < 3; j++){
                for(int k = 0; k < 2; k++){
                    dp[i][j][k] = -1;
                }
            }
        }

        return f(0, K, 0);
    }
}