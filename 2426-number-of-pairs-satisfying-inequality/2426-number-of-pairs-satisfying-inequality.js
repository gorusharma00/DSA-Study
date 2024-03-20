/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, diff) {
    // nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff

    /* tle bruteforce
    let i=0;
    let n = nums1.length;
    let pair = 0;
    while(i<n){
        for(let j=i+1; j<n; j++){
            if(nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff){
                pair++;
            }
        }
        i++;
    }
    return pair;
    */

    let result = 0;

    for(let i=0; i<nums1.length; i++){
        nums1[i] = nums1[i] - nums2[i];
    }
    mergeSort(nums1, 0, nums1.length -1);
    return result
  

    function mergeSort(nums, start, end){
        if(start==end){
            return [nums[start]];
        }
        let mid = Math.floor((start+end)/2);
        let left = mergeSort(nums, start, mid);
        let right = mergeSort(nums, mid+1, end);
        return merge(left, right);
    }

    function merge(left, right){
        let n = left.length;
        let m = right.length;
        let i=0,j=0;
            while(i<n && j<m){
                if(left[i] <= right[j] + diff){
                    result += m-j;
                    i++;
                }else{
                    j++;
                }
            }

        let resultarr = [];
        i=0;
        j=0;

        while(i<left.length && j< right.length){
            if(left[i] <= right[j]){
                resultarr.push(left[i]);
                i++;
            }else{
                resultarr.push(right[j]);
                j++;
            }
        }

        while(i<left.length){
            resultarr.push(left[i]);
            i++;
        }

        while(j<right.length){
            resultarr.push(right[j]);
            j++;
        }

        return resultarr;
    }
};

