/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // map apporach think by me
    let result = [];
    const map = {};
    for(let i=0; i<nums1.length; i++){
        if(!map[nums1[i]]){
            map[nums1[i]] = 1;
        }
    }

    for(let j=0; j<nums2.length;j++){
        if(map[nums2[j]] == 1){
            result.push(nums2[j]);
            map[nums2[j]]--;
        }
    }
    return result;
};