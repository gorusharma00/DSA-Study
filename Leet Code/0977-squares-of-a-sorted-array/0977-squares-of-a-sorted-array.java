class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int j =0;
        int k = n-1;
        for(int i=n-1; i>=0; i--){
            if(nums[j]* nums[j] >= nums[k]*nums[k]){
                result[i] = nums[j]*nums[j];
                j++;
            }else if(nums[k]*nums[k] > nums[j]*nums[j]){
                result[i] = nums[k]*nums[k];
                k--;
            }
        }
        return result;
    }
}