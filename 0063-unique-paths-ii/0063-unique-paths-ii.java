class Solution {
    public static int[][] dp;
    public static int[][] matrix;

    public static int f_bu(){
        dp = new int[105][105];
        int m = matrix.length;
        int n = matrix[0].length;

        if(matrix[0][0] == 1 || matrix[m-1][n-1] == 1) return 0;

        // first row
        for(int j = 0; j <= n-1; j++){
            if(matrix[0][j] == 1) continue;
            dp[0][j] = 1;
        }

        // first column
        for(int i = 0; i <= m-1; i++){
            if(matrix[i][0] == 1) continue;
            dp[i][0] = 1;
        }

        for(int i = 1; i<= m-1; i++){
            for(int j = 1; j<= n-1; j++){
                 if (matrix[i][j] == 1) {
                    dp[i][j] = 0; // Set to 0 if there's an obstacle
                } else {
                    dp[i][j] = dp[i-1][j] + dp[i][j-1];
                }
            }
        }

        return dp[m-1][n-1];
    }

    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        matrix = obstacleGrid;

        return f_bu();
    }
}
