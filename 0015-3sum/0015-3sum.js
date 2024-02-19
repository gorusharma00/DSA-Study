/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((x,y) => x-y);
    let result = [];

    let n = nums.length;
    for(let c=0; c<= n-3; c++){
        if(nums[c] === nums[c-1]) continue;
        let i = c+1;
        let j = n-1;
        let target = -nums[c]
        while(i<j){
            if(nums[i] + nums[j]< target){
                i++;
            }else if(nums[i] + nums[j] > target){
                j--;
            }else{
                result.push([nums[i], nums[j], nums[c]])
                do{
                    i++
                }while(nums[i] === nums[i-1]); // runs till i will same it's previous one
            }
        }
    }
    return result;
};