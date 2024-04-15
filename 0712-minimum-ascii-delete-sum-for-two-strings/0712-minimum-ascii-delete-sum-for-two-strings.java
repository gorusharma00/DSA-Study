class Solution {
    public static String w1, w2;
    public static int[][] dp = new int[505][505];

    public static int f(int i, int j){
        if(i >= w1.length() && j >= w2.length() ) return 0;

        if(dp[i][j] != -1) return dp[i][j];

        if(i >= w1.length()){
            return dp[i][j] = (int) w2.charAt(j) + f(i, j+1);
        }

        if(j >= w2.length()){
            return dp[i][j] = (int) w1.charAt(i) + f(i+1, j);
        }

        if(w1.charAt(i) == w2.charAt(j)){
            return dp[i][j] = f(i+1, j+1);
        }

        int delete_from_w1 = (int) w1.charAt(i) + f(i+1, j);
        int delete_from_w2 = (int) w2.charAt(j) + f(i, j+1);

        return dp[i][j] = Math.min(delete_from_w1, delete_from_w2);     
        
    }

    public int minimumDeleteSum(String s1, String s2) {
        w1 = s1;
        w2 = s2;

        for(int i = 0; i < 505; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(0,0);
    }
}