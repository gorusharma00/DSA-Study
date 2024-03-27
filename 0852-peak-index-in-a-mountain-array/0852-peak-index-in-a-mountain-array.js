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
            lo = mid+1;
        }
    }
    return lo;

    /*  ------- this can be another way(increasing graph way) --------
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) {
        left = mid + 1;
        } else {
        right = mid;
        }
    }
    return left;
    */
};