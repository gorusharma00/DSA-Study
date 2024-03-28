/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1); // i want always my binary search on shorter array and want shorter array as nums1
    let n1 = nums1.length;
    let n2 = nums2.length;
    
    let low =0, high = n1; // search space of nums1

    let left = Math.floor((n1+n2+1) / 2); // length of the left half

    while(low<= high){

        let cut1 = Math.floor((low+high)/2);           // parition of left half 
        let cut2 = left - cut1;    //parition of right half ** n1 + n2 +1 is taken because in odd case but this formula works for  both

        // let left1 = cut1 == 0 ? Number.MIN_VALUE : nums1[cut1 - 1]  // take min if no element is taken and we want l1 before parition line
        // let left2 = cut2 == 0 ? Number.MIN_VALUE : nums2[cut2 -1]

        // let right1 = cut1 == n1 ? Number.MAX_VALUE : nums1[cut1]   // if no element , we take max number it can help to achieve our intutuion
        // let right2 = cut2 == n2 ? Number.MAX_VALUE : nums2[cut2]
        
        let left1 = Number.MIN_SAFE_INTEGER, left2 = Number.MIN_SAFE_INTEGER;
        let right1 = Number.MAX_SAFE_INTEGER, right2 = Number.MAX_SAFE_INTEGER;
        if (cut1 < n1) right1 = nums1[cut1];
        if (cut2 < n2) right2 = nums2[cut2];
        if (cut1 - 1 >= 0) left1 = nums1[cut1 - 1];
        if (cut2 - 1 >= 0) left2 = nums2[cut2 - 1];


        if(left1 <= right2 && left2 <= right1){
            if( (n1+n2) % 2 == 0 ) {
                return  (Math.max(left1, left2) + Math.min(right1, right2) ) / 2;
            }else{
                return Math.max(left1, left2);
            }
        } else if (left1 > right2){
            high = cut1 -1;  // we will go to left to find min no.
        }else{
            low = cut1 + 1;   // case where left2 > right1;
        }
    }

    return 0;


    // time complexity =>  O( log(min(n1 , n2)  )
};