class Solution {
    public static String word;
    public static int[][] dp;

    public static int f(int i, int j){
        if(i > j) return 0;
        if(i == j) return 1;

        if(dp[i][j] != -1) return dp[i][j];

        int ans = 0;
        if(word.charAt(i) == word.charAt(j)){
            ans = 2 + f(i+1, j-1);
        }else{
           ans = Math.max(f(i+1,j), f(i,j-1));
        }
        return dp[i][j] = ans;
    }

    public int longestPalindromeSubseq(String s) {
        word = s;
        dp = new int[1005][1005];
        for(int i = 0; i< 1005; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(0, s.length()-1);
    }
}