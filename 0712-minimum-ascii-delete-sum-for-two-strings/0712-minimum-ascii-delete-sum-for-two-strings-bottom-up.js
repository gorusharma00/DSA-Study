/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
let w1, w2;
let dp;
var minimumDeleteSum = function(s1, s2) {
    w1 = s1;
    w2 = s2;
    
    return f_bu();
};

function f_bu(){
    dp = new Array(1005);
    for(let i = 0; i < 1005; i++){
        dp[i] = new Array(1005).fill(0);
    }

    // base case handle when one of string is out of index

    for(let i = w1.length - 1; i >= 0; i--){
        dp[i][w2.length] = w1.charCodeAt(i) + dp[i+1][w2.length];
    }

    for(let j = w2.length - 1; j >= 0; j--){
        dp[w1.length][j] = w2.charCodeAt(j) + dp[w1.length][j+1];
    }

    for(let i = w1.length - 1; i >= 0; i--){
        for(let j = w2.length - 1; j >= 0; j--){

            if(w1[i] === w2[j]){
                dp[i][j] = dp[i+1][j+1]; 
            }
            else{
                let delete_from_s1_i = w1.charCodeAt(i) + dp[i+1][j];
                let delete_from_s2_j = w2.charCodeAt(j) + dp[i][j +1];
                dp[i][j] = Math.min(delete_from_s1_i, delete_from_s2_j);
            }
        }
    } 

    return dp[0][0];       
}