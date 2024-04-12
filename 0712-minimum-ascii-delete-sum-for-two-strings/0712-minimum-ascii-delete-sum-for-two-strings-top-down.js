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
    dp = new Array(1005);

    for(let i = 0; i < 1005; i++){
        dp[i] = new Array(1005).fill(-1);
    }

    return f(0,0)
};

function f(i,j){
    if(i >= w1.length && j >= w2.length) return 0;

    if(dp[i][j] != -1) return dp[i][j];

    if(i >= w1.length){
        return dp[i][j] = w2.charCodeAt(j) + f(i, j+1);
    }else if(j >= w2.length){
        return dp[i][j] = w1.charCodeAt(i) + f(i+1, j);
    }

    if(w1[i] == w2[j]) return dp[i][j] = f(i+1, j+1);

    let delete_from_s1_i = w1.charCodeAt(i) + f(i+1, j);
    let delete_from_s2_j = w2.charCodeAt(j) + f(i, j +1);

    return dp[i][j] = Math.min(delete_from_s1_i, delete_from_s2_j);
}