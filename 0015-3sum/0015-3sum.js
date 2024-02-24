/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((x,y) => x-y);
    let result = [];

    if(nums.length<3){
        return result;
    }

    if(nums[0]>0){
        return result;
    }

    // let n = nums.length;
    // for(let c=0; c<= n-3; c++){
    //     if(nums[c] === nums[c-1]) continue;
    //     let i = c+1;
    //     let j = n-1;
    //     let target = -nums[c]
    //     while(i<j){
    //         if(nums[i] + nums[j]< target){
    //             i++;
    //         }else if(nums[i] + nums[j] > target){
    //             j--;
    //         }else{
    //             result.push([nums[i], nums[j], nums[c]])
    //             do{
    //                 i++
    //             }while(nums[i] === nums[i-1]); // runs till i will same it's previous one
    //         }
    //     }
    // }
    // return result;

    const map = {};
    for(let i=0; i<nums.length; i++){
        map[nums[i]] = i
    }

    for(let i=0; i<nums.length-2; i++){
        if(nums[i] > 0){
            break;
        }
        for(let j=i+1; j<nums.length-1; j++){
            let sum = -1 * (nums[i] + nums[j]);
            if(map[sum] && map[sum] > j){
                result.push([nums[i], nums[j], sum]);
            }
            j = map[nums[j]];
        }
        i = map[nums[i]];
    }
    return result;
};