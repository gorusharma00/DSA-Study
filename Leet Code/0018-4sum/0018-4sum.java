class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
       List<List<Integer>> result = new ArrayList<>();
       Arrays.sort(nums);
        for(int c=0;c<nums.length-3; c++){

            if(c>0 && nums[c] == nums[c-1]) continue;

            for(int d=c+1; d<nums.length-2; d++){

                if(d> c+1 && nums[d] == nums[d-1]) continue;
                
                int i = d+1;
                int j= nums.length -1;
                while(i<j){
                    long sum = (long) nums[i]+ nums[j] + nums[c] + nums[d];
                    if(target == sum){
                        result.add(Arrays.asList(nums[i], nums[j],nums[c], nums[d]));
                        while(i< j && nums[i] == nums[i+1]) i++;
                        while(i< j && nums[j] == nums[j-1]) j--;
                        j--;
                        i++;
                    } else if(sum> target){
                        j--;
                    }else{
                        i++;
                    }
                }    
            }
        }

        return result;
    }
}