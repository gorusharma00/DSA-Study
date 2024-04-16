class Solution {
    public static int[][] dp = new int[1005][1005];

    public static int f_bu(String s1, String s2){
        // changing indexing to 1based for base case
        for(int i = 1; i <= s1.length(); i++){
            for(int j = 1;  j <= s2.length(); j++){
                if(i == 0 || j == 0) dp[i][j] = 0;
                else{
                    if(s1.charAt(i-1) == s2.charAt(j-1)){
                        dp[i][j] = 1 + dp[i -1][j - 1];
                    }else{
                        dp[i][j] = Math.max(dp[i -1][j], dp[i][j - 1]);
                    }
                }
            }
        }
        return dp[s1.length()][s2.length()];
    }

    public int longestCommonSubsequence(String text1, String text2) {    
        return f_bu(text1, text2);
    }
}