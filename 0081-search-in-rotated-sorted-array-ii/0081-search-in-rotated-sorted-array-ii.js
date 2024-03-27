/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left<=right){
        let mid = left + Math.floor((right -left)/2);
        if(nums[mid] == target){
            return true;
        }

        if(nums[mid] == nums[left] && nums[mid] == nums[right]){
            left++;
            right--;
        }else if(nums[mid] >= nums[left]){
            if(nums[mid] >= target && nums[left] <= target){
                right = mid -1;
            }else{
                left = mid+1;
            }
        }else{
            if(nums[mid] <= target && nums[right] >= target){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
    }
    return false;
};