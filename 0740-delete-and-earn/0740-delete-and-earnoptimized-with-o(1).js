/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let map = {};
    for(let i = 0; i<nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        }else{
            map[nums[i]] = 1;
        }
    }

    nums = [...new Set(nums)] ;
    nums.sort((a,b) => a - b);

    let earn1, earn2 = 0;

    for(let i = 0; i<nums.length; i++){
        let currEarn = nums[i] * map[nums[i]]

        if(i > 0 && nums[i] == nums[i-1] + 1){  
            let temp = earn2;
            earn2 = Math.max(currEarn + earn1 , earn2);
            earn1 = temp;
        }else{
            let temp = earn2;
            earn2 = currEarn + earn2;
            earn1 = temp;
        }
    }
    return earn2;

};
