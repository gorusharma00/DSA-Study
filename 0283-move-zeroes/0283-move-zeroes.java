class Solution {
    public void moveZeroes(int[] nums) {

        // brute force approach

        // for(int i=0; i<nums.length-1; i++){
        //     for(int j=i+1; j<nums.length; j++){
        //         if(nums[i] == 0){
        //             int temp = nums[i];
        //             nums[i] = nums[j];
        //             nums[j] = temp;
        //         }
        //     }
        // }

        //optimal approach

        int l = 0;
        for(int r = 0; r < nums.length; r++){
            if(nums[r] != 0) {
                int tmp = nums[l];
                nums[l] = nums[r];
                nums[r] = tmp;
                l += 1;
            }
        }
    }
}