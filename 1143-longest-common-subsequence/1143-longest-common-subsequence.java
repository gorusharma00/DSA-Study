class Solution {
    public static int[][] dp = new int[1005][1005];
    public static String w1, w2;

    public static int f(int i , int j){
        int m = w1.length();
        int n = w2.length();

        if(i >= m || j >= n) return 0;

        if(dp[i][j] != -1) return dp[i][j];

        if(w1.charAt(i) == w2.charAt(j)){
            return dp[i][j] = 1 + f(i+1, j+1);
        }else{
            int max1 = f(i+1, j);
            int max2 = f(i, j+1);
            int max3 = f(i+1, j+1);

            return dp[i][j] = Math.max(max1, Math.max(max2, max3));
        }
    }

    public int longestCommonSubsequence(String text1, String text2) {
        w1 = text1;
        w2 = text2;

        for(int i = 0; i< 1005; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(0,0);
    }
}