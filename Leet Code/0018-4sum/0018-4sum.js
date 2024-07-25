/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = [];
    nums.sort((a, b) => a - b);

    for(let d = 0; d < nums.length - 3; d++){
        if(d > 0 && nums[d] == nums[d-1]) continue;

        for(let c = d + 1; c < nums.length - 2; c++){
            if(c > d + 1 && nums[c] === nums[c-1]) continue;
            let i = c + 1;
            let j = nums.length - 1;

            while(i < j){
                let sum = nums[i] +  nums[j] + nums[c] + nums[d];

                if(sum > target){
                    j--;
                }else if(sum < target){
                    i++;
                }else{
                    result.push([nums[i], nums[j], nums[c], nums[d]]);

                    while(i < j && nums[i] == nums[i+1]) i++;
                    while(i < j && nums[j] == nums[j-1]) j--;
                    // now they stops when not equal, so i and j have value where they last equal

                    i++;
                    j--;
                }
            }
        }
    }

    return result;
};

/*

Consider the array [1, 1, 2, 2, 3, 3] and target 8.

Let's say d = 0 (i.e., nums[d] = 1).
When c = d + 1 = 1 (i.e., nums[c] = 1), the first occurrence of 1 after d is considered.
When c = 2 (i.e., nums[c] = 2), it is a new element and should be considered.
When c = 3 (i.e., nums[c] = 2), it’s a duplicate of the previous element (nums[c] = nums[c-1]), so it should be skipped.
If we had used c > d instead of c > d + 1, we would have incorrectly skipped the first occurrence of a new valid element after d.
By ensuring the correct condition (c > d + 1), we correctly handle duplicates and ensure that each unique quadruplet is only considered once.

*/
