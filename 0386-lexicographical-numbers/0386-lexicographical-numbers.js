/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let result = [];


    function f(current){
        if(current > n){
            return;
        }
        result.push(current);
        for(let i = 0; i<= 9; i++){
            if(current * 10 + i> n) return;
            f(10 * current + i);
        }
    }

    for(let i = 1; i <= 9; i++){
        if(i > n){
            break;
        }

        f(i);
    }

    return result;
};
