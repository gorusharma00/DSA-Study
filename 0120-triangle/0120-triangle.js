/**
 * @param {number[][]} triangle
 * @return {number}
 */
let matrix;
let dp;

function f_bu(){
    dp = Array(205);

    for(let i = 0; i < 205; i++){
        dp[i] = Array(205);
    }

    let n = matrix.length // total rows
    //base case
    for(let i = 0; i < matrix[n-1].length; i++){
        dp[n-1][i] = matrix[n-1][i];
    }

    for(let row = n-2; row >= 0; row--){
        for(let col = 0; col < matrix[row].length; col++){
            dp[row][col] = matrix[row][col] + Math.min( dp[row+1][col], dp[row+1][col+1]);
        }
    }

    return dp[0][0];
}


var minimumTotal = function(triangle) {
    matrix = triangle;

    return f_bu();
};