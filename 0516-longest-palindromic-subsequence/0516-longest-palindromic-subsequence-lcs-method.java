class Solution {
    public static String s1, s2;
    public static int[][] dp;

    public static int f(String s1, String s2, int i, int j){
        if(i >= s1.length() || j >= s2.length()) return 0;

        if(dp[i][j] != -1) return dp[i][j];

        if(s1.charAt(i) == s2.charAt(j)){
            return dp[i][j] = 1 + f(s1, s2, i+1, j+1);
        }else{
           return dp[i][j] = Math.max(f(s1, s2, i+1,j), f(s1, s2, i,j+1));
        }
    }

    public int longestPalindromeSubseq(String s) {
        s1 = s;
        StringBuilder s2 = new StringBuilder();
        s2.append(s);
        s2.reverse();

        dp = new int[1005][1005];
        for(int i = 0; i< 1005; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(s1, s2.toString(), 0,0);
    }
}