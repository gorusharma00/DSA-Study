class Solution {
    public static String w1, w2;
    public static int[][] dp = new int[505][505];

    public static int f(int i, int j){
        if(i == w1.length()){
            return dp[i][j] = w2.length() - j;
        }

        if(j == w2.length()){
            return dp[i][j] = w1.length() - i;
        }

        if(dp[i][j] != -1) return dp[i][j];
        
        int ans = 0;
        if(w1.charAt(i) == w2.charAt(j)){
            return dp[i][j] = f(i+1, j+1);
        }else{
            int insert = 1 + f(i, j+1);
            int delete = 1 + f(i+1, j);
            int replace = 1 + f(i+1, j+1);
            ans = Math.min(insert, Math.min(delete, replace));
        }
        return dp[i][j] = ans;
    }

    public int minDistance(String word1, String word2) {
        w1 = word1;
        w2 = word2;

        for(int i = 0; i< 500; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(0,0);
    }
}