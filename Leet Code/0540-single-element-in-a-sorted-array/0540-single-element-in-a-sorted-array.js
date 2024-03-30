/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    /*
    let low = 0;
    let high = nums.length -1;
    while(low<high){
        let mid = low + Math.floor((high-low)/2);
        if(mid % 2 == 1){
            mid --;
        }
        if(nums[mid] == nums[mid+1]){
            low = mid+2;
        }else{
            high = mid;
        }  
    }
    return nums[low];
    */
    let n = nums.length;
    if(n==1){
        return nums[0];
    }
    if (nums[0] !== nums[1]) return nums[0];

    let low = 1;
    let high = n-1;
    while(low<=high){
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] != nums[mid+1] && nums[mid] != nums[mid-1]){
            return nums[mid];
        }

        if(mid % 2 == 1 && nums[mid] == nums[mid-1] || mid % 2 ==0 && nums[mid] == nums[mid+1]){
            //means single element not come yet and eliminate left half
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
}