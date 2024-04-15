class Solution {
    public static int[][] dp = new int[205][205];
    public static int[][] matrix;

    public static int f(int i, int j){
        int m = matrix.length;
        int n = matrix[0].length;

        if(i == m-1 && j == n-1) return matrix[i][j];

        if(dp[i][j] != -1) return dp[i][j];

        if(i == m-1){
            return dp[i][j] = matrix[i][j] + f(i, j+1);
        }else if(j == n-1){
            return dp[i][j] = matrix[i][j] + f(i+1, j);
        }else{
            return dp[i][j] = matrix[i][j] + Math.min(f(i+1, j), f(i, j+1));
        }
    }

    public int minPathSum(int[][] grid) {
        matrix = grid;

        for(int i = 0; i<205; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(0,0);
    }
}