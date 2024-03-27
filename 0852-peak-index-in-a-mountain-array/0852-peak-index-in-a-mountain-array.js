/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let lo = 0;
    let hi = arr.length -1
    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) return mid;

        if(arr[mid] > arr[mid+1]){
            hi = mid-1;
        }else{
            lo = mid
        }
    }
    return lo;
};