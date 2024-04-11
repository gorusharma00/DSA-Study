/**
 * @param {number[][]} grid
 * @return {number}
 */
let matrix;
let dp;
var minPathSum = function(grid) {
    matrix = grid;
    dp = new Array(2005);
    for(let i = 0; i<2005; i++){
        dp[i] = new Array(2005).fill(-1);
    }
    return f(0,0);
};

function f(row, col){
    let n = matrix.length;
    let m = matrix[0].length;

    if(dp[row][col] != -1) return dp[row][col];

    if(row == n-1 && col == m-1) return matrix[row][col];

    if(row == n-1){
        return dp[row][col] = matrix[row][col] + f(row, col+1);
    }else if(col == m-1){
         return dp[row][col] = matrix[row][col] + f(row+1, col);
    }else{
         return dp[row][col] = matrix[row][col] + Math.min(f(row+1, col), f(row, col+1));
    }
}