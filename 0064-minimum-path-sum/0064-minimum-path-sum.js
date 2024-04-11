/**
 * @param {number[][]} grid
 * @return {number}
 */
let dp;
let matrix;
var minPathSum = function(grid) {
    matrix = grid;

    return f_bu()
};

function f_bu(){
    let n = matrix.length;
    let m = matrix[0].length;

    dp = new Array(205);
    for(let i = 0; i<205; i++){
        dp[i] = new Array(205);
    }

    dp[0][0] = matrix[0][0];

   // fill first row

   for(let col = 1; col<m; col++){
        dp[0][col] = matrix[0][col] + dp[0][col-1]
   }

   // fill first col

   for(let row = 1; row<n; row++){
        dp[row][0] = matrix[row][0] + dp[row -1][0];
   }

   for(let row = 1; row<n; row++){
        for(let col = 1; col<m; col++){
            dp[row][col] = matrix[row][col] + Math.min(dp[row-1][col], dp[row][col-1]);
        }
   }

    return dp[n-1][m-1];
}
