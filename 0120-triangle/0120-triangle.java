class Solution {
    public static List<List<Integer>> matrix;
    public static int[][] dp = new int[205][205];

    public static int f(int row, int col){
        if(row == matrix.size() - 1) return matrix.get(row).get(col);

        if(dp[row][col] != -1) return dp[row][col];

        return dp[row][col] = matrix.get(row).get(col) + Math.min( f(row+1, col), f(row+1, col+1) );
    }
    public int minimumTotal(List<List<Integer>> triangle) {
        matrix = triangle;

        for(int i = 0; i < 205; i++){
            Arrays.fill(dp[i], -1);
        }

        return f(0,0);
    }
}