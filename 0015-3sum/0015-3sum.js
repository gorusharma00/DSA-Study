/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function twoSum(result, c, nums){
    let lo = c + 1;
    let hi = nums.length -1;

    while(lo < hi){
        let sum = nums[lo] + nums[hi] + nums[c];
        if(sum > 0){
            hi--;
        }else if(sum < 0){
            lo++;
        }else{
            result.push([nums[lo], nums[hi] , nums[c]]);
            lo++;
            hi--;

            while(lo < hi && nums[lo] == nums[lo-1]) lo++;
        }
    }
}

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for(let c = 0; c < nums.length; c++){
        if(c == 0 || nums[c] != nums[c-1]){ // c == 0, because at c no element at left
            twoSum(result, c, nums);
        }
    }

    return result;
};