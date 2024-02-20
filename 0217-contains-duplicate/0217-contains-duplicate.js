/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mp = {};
    for(let i=0; i< nums.length; i++){
        if(mp[nums[i]]){
            return true;
        }else{
            mp[nums[i]] = 1;
        }
    }
    return false;
};