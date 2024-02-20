/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const mp = {}
    let n = nums.length

    for(let i of nums){
        if(mp[i]){
            mp[i] += 1
        }else{
            mp[i] = 1;
        }
    }

    for(let i=0; i<n; i++){
        if(mp[0]){
            nums[i] = 0;
            mp[0]--
        }else if(mp[1]){
            nums[i] = 1;
            mp[1]--
        }else if(mp[2]){
            nums[i] = 2;
            mp[2]--
        }
    }

};