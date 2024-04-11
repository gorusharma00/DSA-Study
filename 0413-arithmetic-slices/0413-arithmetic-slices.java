class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int ans = 0;
        int temp = 0;
        for(int i = 0; i<nums.length; i++){
            if(i==0 || i == 1) ans += 0;
            else{
                if(nums[i] -nums[i-1] != nums[i-1] - nums[i-2]){
                    ans += 0;
                    temp = 0;
                }else{
                    ans += 1 + temp;
                    temp += 1 ;
                }
            }
        }
        return ans;
    }
}