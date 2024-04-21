/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const res = [];
    let i = 1;
    for(let element of target){
        // const element = target[idx];
        while(i < element){
            res.push("Push");
            res.push("Pop");
            i++;
        }
        res.push("Push");
        i++;
    }
    return res;
};