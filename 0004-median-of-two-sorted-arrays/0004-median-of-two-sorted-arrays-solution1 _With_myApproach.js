/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merge_arr = [];
    let n = nums1.length;
    let m = nums2.length;
    let i=0,j=0;

    while(i<n && j<m){
        if(nums1[i] < nums2[j]){
            merge_arr.push(nums1[i]);
            i++;
        }else{
            merge_arr.push(nums2[j])
            j++;
        }
    }

    while(i<n){
        merge_arr.push(nums1[i]);
        i++;
    }

    while(j<m){
        merge_arr.push(nums2[j]);
        j++;
    }

    let lo = 0;
    let hi = merge_arr.length -1;
    let mid = lo + Math.floor((hi-lo)/2);
    if(merge_arr.length % 2 == 0){
        return (merge_arr[mid] + merge_arr[mid+1])/2;
    }else{
        return merge_arr[mid];
    }
};