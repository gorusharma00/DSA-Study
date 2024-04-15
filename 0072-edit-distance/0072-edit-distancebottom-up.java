class Solution {
    public static String w1, w2;
    public static int[][] dp;

    public static int f_bu(){
        dp = new int[505][505];
        // w1.length() vali row par ans be like top down
        
        for(int j = 0; j<w2.length(); j++){
            dp[w1.length()][j] = w2.length() -j;
        }

        for(int i = 0; i<w1.length(); i++){
            dp[i][w2.length()] = w1.length() - i;
        }


        int ans = 0;
        for(int i = w1.length() -1; i >= 0; i--){
            for(int j = w2.length() -1; j >= 0; j--){
                if(w1.charAt(i) == w2.charAt(j)){
                    ans = dp[i][j] = dp[i+1][j+1];
                }else{
                    int insert = 1 + dp[i][j+1];
                    int delete = 1 + dp[i+1][j];
                    int replace = 1 + dp[i+1][j+1];
                    ans = Math.min(insert, Math.min(delete, replace));
                }
                dp[i][j] = ans;
            }
        }
        return dp[0][0];
    }

    public int minDistance(String word1, String word2) {
        w1 = word1;
        w2 = word2;

        return f_bu();
    }
}