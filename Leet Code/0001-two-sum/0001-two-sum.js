/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    */

    // hashing method
    const map = {};
    for(let i=0; i<nums.length; i++){
        let n = nums[i];
        if(map[target - nums[i]] !== undefined){
            return [map[target - n], i]
        }else{
            map[n] = i;
        }
    }
    
};