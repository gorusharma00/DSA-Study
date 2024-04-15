class Solution {
    public static int[][] dp;
    public static int[][] matrix;

    public static int f(int i, int j){
        int m = matrix.length;
        int n = matrix[0].length;

        if(i >= m || j >= n) return 0;
        if(i == m-1 && j == n-1) return 1;

        if(dp[i][j] != 0) return dp[i][j];

        return dp[i][j] = f(i+1, j) + f(i, j+1);
        
    }

    public int uniquePaths(int m, int n) {
        matrix = new int[m][n];
        dp = new int[105][105];

        for(int i = 0; i< 105; i++){
            Arrays.fill(dp[i], 0);
        }

        return f(0,0);
    }
}

// time complexity => O(m * n);

// space complexity => O(m * n);