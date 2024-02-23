class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        for( int c =0; c<nums.length; c++){
            if(c == 0 || nums[c] != nums[c-1]){
                int i = c+1;
                int j = nums.length -1;
                while(i<j){
                    if(nums[i] + nums[j] + nums[c] > 0){
                        j--;
                    }else if(nums[i] + nums[j]+ nums[c] < 0){
                        i++;
                    }else{
                        result.add(Arrays.asList(nums[c], nums[i], nums[j]));
                        while(i<j && nums[i] == nums[i+1]) i++;
                        while(i<j && nums[j] == nums[j-1]) j--;
                        i++;
                        j--;
                    }
                }

            }
        }
        return result;
    }
}