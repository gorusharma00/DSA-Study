class Solution {
    public static int[][] dp;
    public static int[][] matrix;

    public static int f_bu(){
        dp = new int[105][105];
        int m = matrix.length;
        int n = matrix[0].length;

        // base case for first row and column because only one way to reach;

        // first column
        for(int i = 0; i<= m-1; i++){
            dp[i][0] = 1;
        }

        // frist row
        for(int j = 0; j <= n-1; j++){
            dp[0][j] = 1;
        }
        

        for(int i = 1; i <= m-1; i++){
            for(int j = 1; j <= n-1; j++){
                 dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }

        return dp[m-1][n-1];

    }

    public int uniquePaths(int m, int n) {
        matrix = new int[m][n];
        

        return f_bu();
    }
}
