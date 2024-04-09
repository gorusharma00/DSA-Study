/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let arr = new Array(n);

    for(let i = 0; i<n; i++){
        arr[i] = i + 1;
    }

    arr.sort()
    return arr;
};
