class Solution {
    public int searchInsert(int[] nums, int target) {
        int low = 0;
        int high = nums.length -1;
        int ans = nums.length;
        while(low<=high){
            int mid = low + (high-low)/2;
            if(nums[mid] < target){
                low = mid+1;
            }else{
                ans = mid;
                high = mid -1;
            }
        }
        return ans;
    }
}