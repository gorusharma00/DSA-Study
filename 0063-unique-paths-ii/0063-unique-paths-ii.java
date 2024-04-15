class Solution {
    public static int[][] dp = new int[105][105];
    public static int[][] matrix;

    public static int f(int i, int j){
        int m = matrix.length;
        int n = matrix[0].length;

        if(i >= m || j>= n) return 0;
        if(i == m-1 && j == n-1 && matrix[m-1][n-1] != 1) return 1;

        if(dp[i][j] != -1) return dp[i][j];

        if(matrix[i][j] == 1){
            return dp[i][j] = 0;
        }
        return dp[i][j] = f(i+1, j) + f(i, j+1);
    }

    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        matrix = obstacleGrid;

        for(int i = 0; i< 105; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(0,0);
    }
}