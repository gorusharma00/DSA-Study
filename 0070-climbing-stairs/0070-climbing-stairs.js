/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return f(n);
};

function f(n){
    if( n< 0) return 0;
    if(n == 0 || n == 1){
        return 1;
    }

    return f(n-1) + f(n-2);
    
}