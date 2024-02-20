/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // let n = numbers.length;
    // let i = 0;
    // let j = n-1;
    // while(i<j){
    //     if(numbers[i] + numbers[j] == target){
    //         return [i+1, j+1]
    //     }else if(numbers[i] + numbers[j] > target){
    //         j--;
    //     }else{
    //         i++;
    //     }
    // }

    let map = {};
    for(let i=0; i<numbers.length; i++){
        let n = numbers[i]
        if(map[target - n] !== undefined){
            return [map[target -n] +1, i+1]
        }else{
            map[n] = i;
        }
    }
};