/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // binary search approach 
var searchRange = function(nums, target) {
    let result = new Array(1);
    result[0] = (binarySearch(nums, target, true)); // true means search in left
    result[1] = (binarySearch(nums, target, false));
    return result;
};

function binarySearch(arr, p, istarget){
    let low = 0;
    let high = arr.length -1;
    let ans = -1;
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] < p){
            low = mid+1;
        }else if(arr[mid] > p){
            high = mid-1;
        }else{
            ans = mid;
            if(istarget){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
    }
    return ans;
}
