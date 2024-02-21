/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

   /* brute force approach
    nums.sort((x,y) => x-y);
    let res = [];
    let n = nums.length
    for(let i=0; i<=n-4; i++){
        for(let j=i+1; j<=n-3; j++){
            for(let k = j+1; k<=n-2; k++){
                for(let l=k+1; l<=n-1; l++){
                    let sum = nums[i] + nums[j] + nums[k] + nums[l]
                    if(sum === target){
                        let quad = [nums[i],nums[j],nums[k],nums[l]].sort((x,y) => x-y);
                        if(!res.find(x => JSON.stringify(x) === JSON.stringify(quad))){
                            res.push(quad);
                        }
                    }
                }
            }
        }
    }
    return res;

    */

    //better approach
    
    nums.sort((x,y) => x-y);

    let n = nums.length;
    let res = []

    for(let c=0; c<n-3; c++){
        if(c>0 && nums[c] == nums[c-1]) continue;
        for(let d=c+1; d<n-2; d++){
            if(d>c+1 && nums[d] == nums[d-1]) continue;
            let left= d+1;
            let right = n-1;
            while(left<right){
                let sum = nums[c] + nums[d] + nums[left]+ nums[right];
                if(sum == target){
                    res.push([nums[c], nums[d], nums[left], nums[right]])
                    while(nums[left] == nums[left+1]) left++;
                    while(nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                }else if(sum<target){
                    left++;
                }else{
                    right--;
                }
            }
        }
    }
    return res;

    
};