//problem - 15

//not contain duplicates; error in this code acc to leet code;

var threeSum = function(nums) {
    let ans = []
    for(let i=0; i< nums.length-2; i++){
        for(let j=i+1; j< nums.length-1; j++){
            for(let k=j+1; k< nums.length; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    ans.push[[nums[i], nums[j], nums[k]]]
                }
            }
        }
    }
    return ans;
};

console.log(threeSum([-1,0,1,2,-1,-4]))