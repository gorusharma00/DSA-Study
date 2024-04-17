class Solution {
    public static int[][] dp = new int[1005][1005];

    public static int f(String s, int i, int j){
        if(i == j) return 1;  // longest palindromic subsequence of single char is that char only

        if( i > j) return 0; 

        if(dp[i][j] != -1) return dp[i][j];

        if(s.charAt(i) == s.charAt(j)){
            return dp[i][j] = 2 + f(s, i+1, j-1);
        }else{
            return dp[i][j] = Math.max(f(s, i + 1, j), f(s, i, j - 1));
        }
    }

    public int longestPalindromeSubseq(String s) {
        for(int i = 0; i < 1005; i++){
            for(int j = 0; j < 1005; j++){
                dp[i][j] = -1;
            }
        }

        return f(s, 0, s.length()-1);
    }
}