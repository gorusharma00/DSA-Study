class Solution {
    public static int[][] dp;
    public static int[][] matrix;

    public static int f_bu(){
        dp = new int[205][205];
        int m = matrix.length;
        int n = matrix[0].length;

        dp[0][0] = matrix[0][0];

        // first row;
        for(int j = 1; j< n; j++){
            dp[0][j] = matrix[0][j] + dp[0][j-1];
        }

        // first col 
        for(int i = 1; i< m; i++){
            dp[i][0] = matrix[i][0] + dp[i-1][0];
        }

        for(int i = 1; i < m; i++){
            for(int j = 1; j < n; j++){
                dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
            }
        }

        return dp[m-1][n-1];
    }

    public int minPathSum(int[][] grid) {
        matrix = grid;

        return f_bu();
    }
}